"use strict";

/**
 * Import JWT helper
 */
// const { decodeUserToken } = require("../helpers/jwt/jwt.helper");
/**
 * Import constants
 */
const { ER_UNAUTHORIZED_CLIENT } = require("../helpers/constants/message");
/**
 * Import services
 */
// const { get } = require("../apis/users/users.controller");

const User = require("../apis/users/users.model");
const config = require("../../config/config");
const passportJWT = require("passport-jwt");
const { accessSync } = require("fs");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
/**
 * API auth middleware function
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {*}
 */
// const apiAuthMiddleware = async (req, res, next) => {
//     try {

//         const requestIP = req.headers["x-real-ip"] || req.socket.remoteAddress;

//         let token = req.headers.authorization || false;

//         if (token && token.startsWith("Bearer ")) {
//             token = token.slice(7, token.length);
//             const decodedToken = decodeUserToken(token);
//             const _userId = decodedToken._userId || false;
//             const usertype = (decodedToken && decodedToken.role) || undefined;
//             if (_userId) {
//                 const query = {
//                     _id: _userId,
//                 };

//                 if (!usertype) {
//                     const user = await User.findById(query);

//                     if (user) {

//                         req._userId = _userId;
//                         req.usertype = usertype;
//                         req.token = token;
//                         return next();

//                     }
//                 } else if (usertype && ( usertype === "admin" || usertype === "user" || usertype === "seller")) {
//                     const user = await User.findById(query);
//                     if (user) {

//                         req._userId = _userId;
//                         req.usertype = usertype;
//                         req.token = token;
//                         return next();

//                     }
//                 }
//             }
//         }

//         const apiResponse = {
//             statusCode: ER_UNAUTHORIZED_CLIENT.statusCode,
//             error: {
//                 message: ER_UNAUTHORIZED_CLIENT.message,
//                 code: ER_UNAUTHORIZED_CLIENT.code,
//                 field: ER_UNAUTHORIZED_CLIENT.field,
//                 type: ER_UNAUTHORIZED_CLIENT.type,
//             }
//         }

//         return res.status(ER_UNAUTHORIZED_CLIENT.statusCode).send(apiResponse);
//     } catch (error) {

//         const apiResponse = {
//             statusCode: ER_UNAUTHORIZED_CLIENT.statusCode,
//             error: {
//                 message: ER_UNAUTHORIZED_CLIENT.message,
//                 code: ER_UNAUTHORIZED_CLIENT.code,
//                 field: ER_UNAUTHORIZED_CLIENT.field,
//                 type: ER_UNAUTHORIZED_CLIENT.type,
//             }
//         }
//         return res.status(ER_UNAUTHORIZED_CLIENT.statusCode).send(apiResponse);
//     }
// };

// Passport strategy for login via JWT
const jwtAuthMiddleware = (passport) => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret,
      },
      async function (jwt_payload, next) {
        await User.findById({ _id: jwt_payload._userId }, function (err, user) {
          if (err) {
            return next(err, ER_UNAUTHORIZED_CLIENT.message);
          }
          if (user) {
            next(null, user);
          } else {
            next(null, ER_UNAUTHORIZED_CLIENT.message);
          }
        });
      }
    )
  );
};

// Passport strategy for login via facebook
const facebookAuthMiddleware = (passport) => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackURL,
        profileFields: ["id", "emails", "name", "photos"],
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOne(
          {
            email: profile?._json?.email,
          },
          async function (err, user) {
            if (err) {
              return done(err);
            }
            //No user was found... so create a new user with values from Facebook (all the profile. stuff)
            const userDetails = {
              firstName: profile?._json?.first_name || null,
              lastName: profile?._json?.last_name || null,
              email: profile?._json?.email || null,
              profilePicUrl: profile?._json?.picture?.data?.url || null,
              provider: "facebook",
            };
            if (!user) {
              user = new User(userDetails);
              user.save(function (err) {
                if (err) console.log(err);
                return done(err, user);
              });
            } else {
              //found user. Return
              user = await User.findOneAndUpdate(
                { email: profile?._json?.email },
                userDetails,
                {},
                (err) => {
                  if (err) console.log(err);
                  return done(err, user);
                }
              );
            }
          }
        );
      }
    )
  );
};
// Passport strategy for login via google
const googleAuthMiddleware = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: config.google.callbackURL,
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOne(
          {
            email: profile?._json?.email,
          },
          async function (err, user) {
            if (err) {
              return done(err);
            }
            //No user was found... so create a new user with values from Facebook (all the profile. stuff)
            const userDetails = {
              firstName: profile?._json?.given_name || "",
              lastName: profile?._json?.family_name || "",
              email: profile?._json?.email,
              profilePicUrl: profile?._json?.picture || "",
              provider: "google",
            };
            if (!user) {
              user = new User(userDetails);
              user.save(function (err) {
                if (err) console.log(err);
                return done(err, user);
              });
            } else {
              //found user. Return
              user = await User.findOneAndUpdate(
                { email: profile?._json?.email },
                userDetails,
                {},
                (err) => {
                  if (err) console.log(err);
                  return done(err, user);
                }
              );
            }
          }
        );
      }
    )
  );
};

// route middleware to make sure
const authenticatedUser = (req, res, next) => {
  const apiResponse = {
    statusCode: ER_UNAUTHORIZED_CLIENT.statusCode,
    error: {
      message: ER_UNAUTHORIZED_CLIENT.message,
      code: ER_UNAUTHORIZED_CLIENT.code,
      field: ER_UNAUTHORIZED_CLIENT.field,
      type: ER_UNAUTHORIZED_CLIENT.type,
    },
  };
  req.user
    ? next()
    : res.status(ER_UNAUTHORIZED_CLIENT.statusCode).send(apiResponse);
};
// function isLoggedIn(req, res, next) {

//     // if user is authenticated in the session, carry on
//     if (req.isAuthenticated())
//         return next();

//     // if they aren't redirect them to the home page
//     res.redirect('/');
// }

module.exports = {
  jwtAuthMiddleware,
  facebookAuthMiddleware,
  authenticatedUser,
  googleAuthMiddleware,
};
