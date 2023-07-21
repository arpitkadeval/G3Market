const User = require("./users.model");
const APIResponse = require("../../helpers/APIResponse");
const Utils = require("../../helpers/utils");
const httpStatus = require("http-status");
const APIError = require("../../helpers/APIError");
const JWTHelper = require("../../helpers/jwt/jwt.helper");
const { findByIdAndUpdate } = require("./users.model");
const { response } = require("express");
const config = require("../../../config/config");

/**
 */
async function load(req, res, next, _id) {
  try {
    req.user = await User.findById({ _id }); // eslint-disable-line no-param-reassign

    return next();
  } catch (e) {
    return next(e);
  }
}

/**
 * Get user
 * @returns {User}
 */
async function get(req, res, next) {
  const _id = req.params._id;
  try {
    const data = await User.findById({ _id });
    if (data.length === 0) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send(new APIResponse(Utils.messages.USER_NOT_EXIST));
    }
    res.status(httpStatus.OK).send(new APIResponse(data));
  } catch (e) {
    return next(e);
  }
}

async function create(req, res, next) {
  try {
    const encryptPWD = Utils.encrypt(req.body.password);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: encryptPWD,
      // userType: req.body.userType || "user"
    });

    const userExists = await User.findOne({ $or: [{ email: user.email }] });
    if (!userExists) {
      await user.save();
      const findUser = await User.findById({ _id: user._id }).populate(
        "userType"
      );
      res
        .status(httpStatus.OK)
        .send(new APIResponse(findUser, Utils.messages.SUCCESS_INSERT));
    } else if (userExists.email === user.email) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json(
          new APIError("Email is Already Exists...", httpStatus.BAD_REQUEST)
        );
    }
  } catch (e) {
    next(e);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params._id;
    const user = await findByIdAndUpdate({ _id: id });
    // const user = await User.findById({ _id: id });
    if (user) {
      // user.firstName = req.body.firstName;
      // user.lastName = req.body.lastName;
      // user.email = req.body.email;
      // user.phone = req.body.phone;
      // user.userType = req.body.userType;
      // await user.save();
      // const findUser = await User.findById({ _id: user._id }).populate('userType');
      res
        .status(httpStatus.OK)
        .send(new APIResponse(user, Utils.messages.SUCCESS_INSERT));
    } else {
      res
        .status(httpStatus.NOT_FOUND)
        .json(new APIError("User not found.", httpStatus.NOT_FOUND));
    }
  } catch (e) {
    next(e);
  }
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
async function list(req, res, next) {
  try {
    let users = await User.list({ isActive: true }).populate("userType");
    const count = await User.count({ isActive: true });
    const data = { count, users };
    res.status(httpStatus.OK).send(new APIResponse(data));
  } catch (e) {
    next(e);
  }
}

/**
 * Delete user.
 * @returns {User}
 */
async function remove(req, res, next) {
  try {
    const id = req.params._id;
    await User.deleteOne({ _id: id });
    res
      .status(httpStatus.OK)
      .send(new APIResponse({}, Utils.messages.SUCCESS_DELETE));
  } catch (e) {
    res
      .status(httpStatus.UNAUTHORIZED)
      .send(new APIError("", httpStatus.UNAUTHORIZED));
  }
}

async function login(req, res, next) {
  try {
    // eslint-disable-next-line max-len
    const user = await User.findOne({
      email: req.body.email,
      isActive: true,
    }).populate("userType");
    if (!user) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .send(new APIError(Utils.messages.INVALID_LOGIN));
    }

    const encryptPWD = Utils.encrypt(req.body.password);
    if (user.isActive && user && user.password === encryptPWD) {
      const token = JWTHelper.getJWTToken({
        email: user.email,
        _userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
      });
      await user.save();

      const data = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userType: user.userType,
      };

      return res
        .status(httpStatus.OK)
        .json(new APIResponse({ token, data }, Utils.messages.SUCCESS_LOGIN));
      // eslint-disable-next-line no-else-return
    } else {
      if (!user.userStatus) {
        // eslint-disable-next-line max-len
        return res
          .status(httpStatus.SERVICE_UNAVAILABLE)
          .send(new APIError(Utils.messages.INVALID_LOGIN));
      }
      return res
        .status(httpStatus.UNAUTHORIZED)
        .send(new APIError(Utils.messages.INVALID_LOGIN));
    }
  } catch (e) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send(new APIError(Utils.messages.INVALID_LOGIN));
  }
}

async function loginWithSocial(req, res, next) {
  const user = res?.req?.user?._doc;
  if (user) {
    const token = JWTHelper.getJWTToken({
      email: user.email,
      _userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
    });
    res.cookie("token", token);
    res.cookie("id", user._id);
    res.redirect(config.socialLogin.success);
  } else {
    return res
      .status(httpStatus.SERVICE_UNAVAILABLE)
      .send(new APIError(Utils.messages.INVALID_LOGIN));
  }
}

module.exports = {
  load,
  get,
  create,
  list,
  update,
  remove,
  login,
  loginWithSocial,
};
