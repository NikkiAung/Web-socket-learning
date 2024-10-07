const express = require('express');
/**----app setup---- */
const app = express();
const socket = require('socket.io');
require('dotenv').config()

/**----server setup---- */
let server = app.listen(process.env.PORT, () => {
    console.log('Server is listening to '+ process.env.PORT);
});

/**----route setup---- */
app.get('/',(req, res) => {
    res.sendFile(__dirname+'/public/index.html')
});

/**----socket setup---- */
let io = socket(server);
io.on("connection", (socket) => {
    console.log("socket connection connected" + socket.id);
});
