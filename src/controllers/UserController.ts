import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserRequest, UpdateUserRequest } from '../models/User';
import { deleteFromCloudinary, extractPublicIdFromUrl } from '../config/cloudinary';

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Get all users
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
      const { ballotNumber, name, ballotName, postalNumber, registrationNumber, department, hall, designation } = req.body as CreateUserRequest;

      if (!ballotNumber || !name || !ballotName || !designation) {
        res.status(400).json({
          success: false,
          message: 'Ballot number, name, ballot name, and designation are required'
        });
        return;
      }

      // Check if ballot name already exists
      const existingUser = await this.userRepository.findByBallotName(ballotName);
      if (existingUser) {
        res.status(409).json({
          success: false,
          message: 'Ballot name already exists'
        });
        return;
      }

      // Get photo URL from Cloudinary upload
      const photoUrl = req.file ? req.file.path : undefined;

      const userData = {
        ballotNumber,
        name,
        ballotName,
        postalNumber,
        registrationNumber,
        department,
        hall,
        designation,
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
      const { ballotNumber, name, ballotName, postalNumber, registrationNumber, department, hall, designation } = req.body as UpdateUserRequest;

      // Check if user exists
      const existingUser = await this.userRepository.findById(id);
      if (!existingUser) {
        res.status(404).json({
          success: false,
          message: 'User not found'
        });
        return;
      }

      // Check if ballot name already exists (for other users)
      if (ballotName && ballotName !== existingUser.ballotName) {
        const userWithBallotName = await this.userRepository.findByBallotName(ballotName);
        if (userWithBallotName) {
          res.status(409).json({
            success: false,
            message: 'Ballot name already exists'
          });
          return;
        }
      }

      const updateData: UpdateUserRequest & { photo?: string } = {};
      
      if (ballotNumber) updateData.ballotNumber = ballotNumber;
      if (name) updateData.name = name;
      if (ballotName) updateData.ballotName = ballotName;
      if (postalNumber) updateData.postalNumber = postalNumber;
      if (registrationNumber) updateData.registrationNumber = registrationNumber;
      if (department) updateData.department = department;
      if (hall) updateData.hall = hall;
      if (designation) updateData.designation = designation;

      // Handle photo update
      if (req.file) {
        // Delete old photo from Cloudinary if exists
        if (existingUser.photo) {
          try {
            const publicId = extractPublicIdFromUrl(existingUser.photo);
            await deleteFromCloudinary(`ducsu-users/${publicId}`);
          } catch (error) {
            console.error('Error deleting old photo:', error);
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

      // Delete photo from Cloudinary if exists
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
