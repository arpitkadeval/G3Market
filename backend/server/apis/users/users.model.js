/* eslint-disable max-len */
const Promise = require("bluebird");
const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../../helpers/APIError");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
/**
 * User Schema
 */
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    phone: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    profilePicUrl: {
      type: String,
    },
    password: { type: String },
    provider: { type: String },
    // userType:{
    //   type:ObjectId,
    //   ref: "roles",
    //   required: false
    // },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamp: true }
);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
UserSchema.method({});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    try {
      return this.findById(id);
    } catch (e) {
      const err = new APIError("No such user exists!", httpStatus.NOT_FOUND);
      return Promise.reject(err);
    }
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list() {
    return this.find({ isActive: true });
  },
};

/**
 * @typedef User
 */

module.exports = mongoose.model("users", UserSchema);
