const Role = require('./roles.model');
const APIResponse = require('../../helpers/APIResponse');
const Utils = require('../../helpers/utils');
const httpStatus = require('http-status');
const APIError = require('../../helpers/APIError');
const JWTHelper = require('../../helpers/jwt/jwt.helper');

/**
 */
async function load(req, res, next, _id) {
  try {
    req.role = await Role.findById({ _id }); // eslint-disable-line no-param-reassign

    return next();
  } catch (e) {
    return next(e);
  }
}

/**
 * Get Role
 * @returns {Role}
 */
async function get(req, res, next) {
  const _id = req.params._id;
  try {

    const data = await Role.find({ _id });
    if (data.length === 0) {
      return res.status(httpStatus.NOT_FOUND).send(new APIResponse(Utils.messages.USER_NOT_EXIST));
    }
    res.status(httpStatus.OK).send(new APIResponse(data));
  }
  catch (e) {
    return next(e);
  }
}


async function create(req, res, next) {
  try {
    const role = new Role({
      type: req.body.type
    });

    const roleExists = await Role.findOne({ $or:[{ type: role.type }] });
    if (!roleExists) {
      await role.save();
      const findRole = await Role.findById({ _id: role._id });
      res
        .status(httpStatus.OK)
        .send(new APIResponse(findRole, Utils.messages.SUCCESS_INSERT));
    } else if (roleExists.type === role.type) {

      res
        .status(httpStatus.BAD_REQUEST)
        .json(new APIError('Role type is already Exists...', httpStatus.BAD_REQUEST));
    }
  } catch (e) {
    next(e);
  }
}


/**
 * Get role list.
 * @property {number} req.query.skip - Number of roles to be skipped.
 * @property {number} req.query.limit - Limit number of roles to be returned.
 * @returns {Role[]}
 */
async function list(req, res, next) {
  try {

    let roles = await Role.list({ isActive: true });
    const count = await Role.count({ isActive: true });
    const data = { count, roles };
    res.status(httpStatus.OK).send(new APIResponse(data));
  } catch (e) {
    next(e);
  }
}

/**
 * Delete Role.
 * @returns {User}
 */
async function remove(req, res, next) {
  try {
    const id = req.params._id;
    await Role.deleteOne({ _id: id });
    res.status(httpStatus.OK).send(new APIResponse({}, Utils.messages.SUCCESS_DELETE));
  } catch (e) {
    res.status(httpStatus.UNAUTHORIZED).send(new APIError("Authorization is requred", httpStatus.UNAUTHORIZED));
  }
}

module.exports = {
  load,
  get,
  create,
  list,
  remove,
};
