"use strict";

/**
 * Import JWT helper
 */
const { decodeUserToken } = require("../helpers/jwt/jwt.helper");
/**
 * Import constants
 */
const {
    ER_UNAUTHORIZED_CLIENT,
} = require("../helpers/constants/message");
/**
 * Import services
 */
const { getValidUserData } = require('../apis/users/users.controller');

const User = require('../apis/users/users.model');
const mongoose = require('mongoose');
/**
 * API auth middleware function
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {*}
 */
const bindUserDataMiddleware = async (req, res, next) => {
    let token = req.headers.authorization || false;
    if (token && token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
        const decodedToken = decodeUserToken(token);
        const _userId = decodedToken._userId || false;
        if (_userId) {
            const userData = await getValidUserData({ _id: mongoose.Types.ObjectId(_userId) });

            if (userData && Array.isArray(userData) && userData.length) {
                req['user'] = userData[0];
            }else{
                const apiResponse = {
                    statusCode: ER_UNAUTHORIZED_CLIENT.statusCode,
                    error: {
                        message: ER_UNAUTHORIZED_CLIENT.message,
                        code: ER_UNAUTHORIZED_CLIENT.code,
                        field: ER_UNAUTHORIZED_CLIENT.field,
                        type: ER_UNAUTHORIZED_CLIENT.type,
                    }
                }
        
                return res.status(ER_UNAUTHORIZED_CLIENT.statusCode).send(apiResponse);
            }
        }
    }
    next();
};

module.exports = { bindUserDataMiddleware }