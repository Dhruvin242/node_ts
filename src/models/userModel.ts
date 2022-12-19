import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
  fname: string;
  lname: string;
  pass: string;
}

interface User {
  fname: string;
  lname: string;
  fullUsername: string;
  pass: string;
}

const userSchema = new Schema<User>({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  fullUsername: {
    type: String,
  },
  pass: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function (): void {
  this.fullUsername = `${this.fname} ${this.lname}`;
});

const User = model<User>("User", userSchema);

export default User;
