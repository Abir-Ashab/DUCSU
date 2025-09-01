import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserRequest, UpdateUserRequest } from '../models/User';
import { deleteFromCloudinary, extractPublicIdFromUrl } from '../config/cloudinary';

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userRepository.findAll();
      res.status(200).json({
        success: true,
        data: users,
        message: 'Users retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving users',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  // Get user by ID
  getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const user = await this.userRepository.findById(id);
      
      if (!user) {
        res.status(404).json({
          success: false,
          message: 'User not found'
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: user,
        message: 'User retrieved successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving user',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { ballotNumber, name, designation, voteNumber, registrationNumber, department, hall, Category } = req.body as CreateUserRequest;

      // Get photo URL from Cloudinary upload
      const photoUrl = req.file ? req.file.path : undefined;

      const userData = {
        ballotNumber,
        name,
        designation,
        voteNumber,
        registrationNumber,
        department,
        hall,
        Category,
        photo: photoUrl
      };

      const user = await this.userRepository.create(userData);

      res.status(201).json({
        success: true,
        data: user,
        message: 'User created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error creating user',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  // Update user
  updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { ballotNumber, name, designation, voteNumber, registrationNumber, department, hall, Category } = req.body as UpdateUserRequest;

      // Check if user exists
      const existingUser = await this.userRepository.findById(id);
      if (!existingUser) {
        res.status(404).json({
          success: false,
          message: 'User not found'
        });
        return;
      }


      const updateData: UpdateUserRequest & { photo?: string } = {};
      
      if (ballotNumber) updateData.ballotNumber = ballotNumber;
      if (name) updateData.name = name;
      if (designation) updateData.designation = designation;
      if (voteNumber) updateData.voteNumber = voteNumber;
      if (registrationNumber) updateData.registrationNumber = registrationNumber;
      if (department) updateData.department = department;
      if (hall) updateData.hall = hall;
      if (Category) updateData.Category = Category;

      // Handle photo update
      if (req.file) {
        // Delete old photo from Cloudinary if exists
        if (existingUser.photo) {
          try {
            const publicId = extractPublicIdFromUrl(existingUser.photo);
            await deleteFromCloudinary(`ducsu-users/${publicId}`);
          } catch (error) {
            console.error('Warning: Could not delete old photo from Cloudinary:', error);
            // Don't throw error here - continue with update even if old photo deletion fails
          }
        }
        updateData.photo = req.file.path;
      }

      const updatedUser = await this.userRepository.update(id, updateData);

      res.status(200).json({
        success: true,
        data: updatedUser,
        message: 'User updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating user',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  // Delete user
  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      // Check if user exists and get photo URL
      const existingUser = await this.userRepository.findById(id);
      if (!existingUser) {
        res.status(404).json({
          success: false,
          message: 'User not found'
        });
        return;
      }

      if (existingUser.photo) {
        try {
          const publicId = extractPublicIdFromUrl(existingUser.photo);
          await deleteFromCloudinary(`ducsu-users/${publicId}`);
        } catch (error) {
          console.error('Error deleting photo from Cloudinary:', error);
        }
      }

      const deleted = await this.userRepository.delete(id);

      if (!deleted) {
        res.status(404).json({
          success: false,
          message: 'User not found'
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: 'User deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error deleting user',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };
}
