"use strict";

const makeError = ( statusCode, code, message, type = undefined, field = undefined ) => {
    const error = new Error( message );
    error.statusCode = statusCode;
    error.code = code;
    error.type = type;
    error.field = field;
    return error;
}

const ER_UNAUTHORIZED_CLIENT = makeError( 401, "ER_UNAUTHORIZED_CLIENT", "Unauthorized client access to API.", "AUTHORIZATION" );
const ER_API_NOT_FOUND = makeError( 400, "ER_API_NOT_FOUND", "API cannot be found.", "REQUEST_VALIDATION" );
module.exports = {
  SUCCESS_MSG: 'Successfully Data Fetch',
  SUCCESS_LOGIN: 'Successfully Login.',
  INVALID_LOGIN: 'Please check login credentials.',
  SUCCESS_INSERT: 'Record Sucessfully Inserted.',
  SUCCESS_UPDATE: 'Record Sucessfully Updated.',
  SUCCESS_DELETE: 'Record Sucessfully Deleted.',
  SUCCESS_ACTIVE: 'Record Sucessfully Activated.',
  SUCCESS_DEACTIVE: 'Record Sucessfully Deactivated.',
  SUCCESS_RESETPASS: 'Password Successfully Updatesd',
  AUTHENTICATION_ERR: 'Authentication error',
  USER_EMAIL_EXISTS: 'Email has been already registered.',
  USER_NOT_EXIST: "User not found",
  ER_UNAUTHORIZED_CLIENT:ER_UNAUTHORIZED_CLIENT,
  ER_API_NOT_FOUND:ER_API_NOT_FOUND

};
