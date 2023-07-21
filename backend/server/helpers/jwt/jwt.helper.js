const jwt = require('jsonwebtoken');
const User = require('../../apis/users/users.model');
const config = require('../../../config/config');
const mongoose = require('mongoose');

function getData(token) {
  return jwt.decode(token.replace('Bearer ', ''));
}

async function getAuthUser(token) {
  try {
    const tokenData = getData(token);
    const user = await User.findOne({ _id: mongoose.Types.ObjectId(tokenData._userId) });
    const resUser = JSON.parse(JSON.stringify(user));
    delete resUser.password;
    return resUser;
  } catch (e) {
    return {};
  }
}

// async function getAuthUser1(token) {
//   try {
//     const tokenData = getData(token);
//     const user = await User.findOne({ _id: tokenData._userId });
//     const resUser = JSON.parse(JSON.stringify(user));
//     delete resUser.password;
//     return resUser;
//   } catch (e) {
//     return {};
//   }
// }

function getJWTToken(data) {
  const token = `${jwt.sign(data, config.jwtSecret, {expiresIn: '24h'})}`;
  return token;
}

/**
 * Decode user api token
 * @param {*} token
 * @returns {*}
 */
 const decodeUserToken = (token) => {
  try {
      const decodedToken = jwt.verify(token, config.jwtSecret);
      return decodedToken;
  } catch (error) {
      return false;
  }
};


module.exports = { getData, getAuthUser, getJWTToken, decodeUserToken};
