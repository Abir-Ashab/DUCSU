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
      ballotName: userData.ballotName,
      postalNumber: userData.postalNumber,
      registrationNumber: userData.registrationNumber,
      department: userData.department,
      hall: userData.hall,
      designation: userData.designation,
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

  async findByBallotName(ballotName: string): Promise<IUser | null> {
    return await User.findOne({ ballotName });
  }

  async existsByBallotName(ballotName: string, excludeId?: string): Promise<boolean> {
    const query: any = { ballotName };
    if (excludeId) {
      query._id = { $ne: excludeId };
    }
    const user = await User.findOne(query);
    return user !== null;
  }
}
