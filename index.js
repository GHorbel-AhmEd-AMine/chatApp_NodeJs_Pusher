const express = require('express')
const cors = require('cors')
const Pusher = require("pusher")

const pusher = new Pusher({
    appId: "1356709",
    key: "f002e97e367acdbe9e12",
    secret: "71f74018c381c2b5de23",
    cluster: "eu",
    useTLS: true
  });


const app = express();

app.use(cors({
    origin: ['http://localhost:3000','http://localhost:8080','http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
      });

    res.json([]);
})

console.log('Listening to port 8000');
app.listen(8000)

