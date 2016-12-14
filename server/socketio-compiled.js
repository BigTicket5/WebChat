'use strict';

/**
 * Created by zh355245849 on 2016/11/30.
 */

module.exports = function (http) {
    var io = require('socket.io')(http);

    // Listen for a connection
    // usernames which are currently connected to the chat
    var usernames = {};

    // rooms which are currently available in chat
    var rooms = ['room1', 'room2', 'room3'];

    io.sockets.on('connection', function (socket) {

        // when the client emits 'adduser', this listens and executes
        socket.on('adduser', function (room) {

            // store the room name in the socket session for this client
            socket.room = 'room1';

            // send client to room 1
            socket.join('room1');
            console.log("join room1   " + room);
        });

        // when the client emits 'sendchat', this listens and executes
        socket.on('sendchat', function (data) {
            // we tell the client to execute 'updatechat' with 2 parameters
            console.log("message  " + JSON.stringify(data));
            // console.log(socket);
            socket.broadcast.emit('updatechat', data);
        });

        socket.on('disconnect', function () {
            // remove the username from global usernames list
            delete usernames[socket.username];
            // update list of users in chat, client-side
            io.sockets.emit('updateusers', usernames);
            // echo globally that this client has left
            socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
            socket.leave(socket.room);
        });
    });
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

//# sourceMappingURL=socketio-compiled.js.map