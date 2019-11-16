require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const massive = require('massive')
const authCtrl = require('./authController')

const app = express()

app.use(express.json())

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('Database connected')
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})

