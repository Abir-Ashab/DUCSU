import { User, IUser, CreateUserRequest, UpdateUserRequest } from '../models/User';

export class UserRepository {
  async findAll(): Promise<IUser[]> {
    return await User.find().sort({ createdAt: -1 });
  }

  async findById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  async create(userData: CreateUserRequest & { photo?: string }): Promise<IUser> {
    const user = new User({
      ballotNumber: userData.ballotNumber,
      name: userData.name,
      designation: userData.designation,
      voteNumber: userData.voteNumber,
      registrationNumber: userData.registrationNumber,
      department: userData.department,
      hall: userData.hall,
      Category: userData.Category,
      photo: userData.photo
    });

    return await user.save();
  }

  async update(id: string, userData: UpdateUserRequest & { photo?: string }): Promise<IUser | null> {
    return await User.findByIdAndUpdate(
      id,
      { ...userData },
      { new: true, runValidators: true }
    );
  }

  async delete(id: string): Promise<boolean> {
    const result = await User.findByIdAndDelete(id);
    return result !== null;
  }

  async findByVoteNumber(voteNumber: string): Promise<IUser | null> {
    return await User.findOne({ voteNumber });
  }

  async existsByVoteNumber(voteNumber: string, excludeId?: string): Promise<boolean> {
    const query: any = { voteNumber };
    if (excludeId) {
      query._id = { $ne: excludeId };
    }
    const user = await User.findOne(query);
    return user !== null;
  }
}
