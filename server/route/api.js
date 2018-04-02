const express = require('express')
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose')
const db = 'mongodb://johnddong:express@ds127899.mlab.com:27899/eventsdb'

mongoose.connect(db, err => {
    if (err) {
        console.error('Error! ' + err)
    } else {
        console.log('mongoose db has benn connected')
    }
})

router.get('/', (req, res) => {
    res.send('hello from express server')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registerUser) => {
        if (err) {
            console.error(err)
        } else {
            res.status(200).send(registerUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (!user) {
                res.status(401).send('user not found')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('password not matched')
                } else {
                    res.status(200).send(user)
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "2",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "3",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "4",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "5",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "6",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        }

    ]
    res.json(events)
})

router.get('/special', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "2",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "3",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "4",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "5",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        },
        {
            "_id": "6",
            "name": "Auto Exp",
            "description": "lorem ipsum",
            "date": "2018-04-23"
        }

    ]
    res.json(events)
})


module.exports = router