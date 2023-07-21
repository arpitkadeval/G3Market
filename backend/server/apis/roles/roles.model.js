/* eslint-disable max-len */
const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../../helpers/APIError');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
/**
 * Role Schema
 */
const RoleSchema = new mongoose.Schema({
  type: { type: String },
  isActive:{
    type: Boolean,
    default: true,
  },
}, { timestamp: true });

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
RoleSchema.method({});

/**
 * Statics
 */
RoleSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    try {
      return this.findById(id);
    } catch (e) {
      const err = new APIError('No such role exists!', httpStatus.NOT_FOUND);
      return Promise.reject(err);
    }
  },

  /**
   * List roles in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of roles to be skipped.
   * @param {number} limit - Limit number of roles to be returned.
   * @returns {Promise<Role[]>}
   */
  list() {
    return this.find({ isActive: true });
  }
};

/**
 * @typedef Role
 */

module.exports = mongoose.model('roles', RoleSchema);
