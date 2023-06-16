const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080
const connect = require('./config/db');
const userRouter = require('./routes/user.route')
app.use(express.json());
app.use(cors())

app.get('/api/', (req, res) => {
    return res.status(200).send({ massage: "hello vivek" })
})
app.use('/api', userRouter)





app.listen(port, (req, res) => {
    try {
        connect()
        console.log('server listening on port ' + port)
    } catch (error) {
        console.log(error.message)
    }
})