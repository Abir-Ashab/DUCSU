import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  ballotNumber?: string;
  name?: string;
  designation?: string;
  voteNumber?: string;
  registrationNumber?: string;
  department?: string;
  hall?: string;
  Category?: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  ballotNumber?: string;
  name?: string;
  designation?: string;
  voteNumber?: string;
  registrationNumber?: string;
  department?: string;
  hall?: string;
  Category?: string;
}

export interface UpdateUserRequest {
  ballotNumber?: string;
  name?: string;
  designation?: string;
  voteNumber?: string;
  registrationNumber?: string;
  department?: string;
  hall?: string;
  Category?: string;
}

const UserSchema: Schema = new Schema({
  ballotNumber: {
    type: String,
    required: false,
    trim: true
  },
  name: {
    type: String,
    required: false,
    trim: true
  },
  designation: {
    type: String,
    required: false,
    trim: true
  },
  voteNumber: {
    type: String,
    required: false,
    trim: true
  },
  registrationNumber: {
    type: String,
    trim: true,
    default: null
  },
  department: {
    type: String,
    trim: true,
    default: null
  },
  hall: {
    type: String,
    trim: true,
    default: null
  },
  Category: {
    type: String,
    trim: true,
    default: null
  },
  photo: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

export const User = mongoose.model<IUser>('User', UserSchema);
