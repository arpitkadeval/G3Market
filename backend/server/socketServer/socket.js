"use strict";

// IMPORTS=================================================================================================
// const { decodeUserToken } = require("../jwt");s

const { Server } = require("socket.io");
const { decodeUserToken } = require("../helpers/jwt/jwt.helper");
const User = require("../apis/users/users.model");
const ObjectID = require("mongodb").ObjectID;
var io = undefined;

// METHODS=================================================================================================
/**
 * Creating Socket IO server and assigning filtered rooms to the incoming connections.
 * @param {object} server
 */
const createSocketIOServer = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  console.log('server creation');
  io.on('connection', async (socket) => {
    console.log('socket connection', socket.id);
    // const token = socket.handshake.headers.authorization;
    // const decodedToken = decodeUserToken(token);
    // const _userId = decodedToken._userId || false;
    // console.log('_userId', token);
    // const findUser = await User.findOne({ _id: ObjectID(_userId) });
    // if (findUser) {
    //   const rooms = [`${REDEEMED_USER_ID}-${findUser._id}`];
    //   socket.join(rooms);
    // } else {
    //   console.log("user not found");
    // }
    socket.join('room-1');

    socket.on('disconnec', () => {
      console.log("disconnect...");
    });
  });
};

/**
 * Main emittor for socket connections.
 * @param {string} operation
 * @param {string} key
 * @param {object} data
 */
const callSocket = (operation, key, data) => {
  // debugger
  const room = `${operation}-${key}`;
  console.log("emitting on", room, operation, data);
  io.to(room).emit(operation.trim(), data);
  console.log("response emitted");
};

// EXPORTS=================================================================================================
module.exports = {
  createSocketIOServer,
  callSocket,
};