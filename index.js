const express = require('express')
const app = express();

require('dotenv').config()

app.listen(process.env.PORT, () => {
    console.log('Server is listening to '+ process.env.PORT);
})

app.get('/',(req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})