import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  ballotNumber: string;
  name: string;
  ballotName: string;
  postalNumber?: string;
  registrationNumber?: string;
  department?: string;
  hall?: string;
  designation: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  ballotNumber: string;
  name: string;
  ballotName: string;
  postalNumber?: string;
  registrationNumber?: string;
  department?: string;
  hall?: string;
  designation: string;
}

export interface UpdateUserRequest {
  ballotNumber?: string;
  name?: string;
  ballotName?: string;
  postalNumber?: string;
  registrationNumber?: string;
  department?: string;
  hall?: string;
  designation?: string;
}

const UserSchema: Schema = new Schema({
  ballotNumber: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  ballotName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  postalNumber: {
    type: String,
    trim: true,
    default: null
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
  designation: {
    type: String,
    required: true,
    trim: true
  },
  photo: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

export const User = mongoose.model<IUser>('User', UserSchema);
