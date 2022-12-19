import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

import User, { UserDocument } from "../models/userModel";

export function createUser(input: DocumentDefinition<UserDocument>) {
  return User.create(input);
}

export function findUsers(
  query: FilterQuery<UserDocument>,
  options: QueryOptions = { lean: true }
) {
  return User.find(query, {}, options);
}

export function findAndUpdate(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions = { lean: true }
) {
  return User.findOneAndUpdate(query, update, options);
}

export function deleteUser(query: FilterQuery<UserDocument>) {
  return User.deleteOne(query);
}