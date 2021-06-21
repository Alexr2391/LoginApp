const express = require('express');
const server = express();



server.use(express.json())
server.use(express.urlencoded({extended: true}))


const users = [
    {
        username : "JohnDoe", 
        password: '12345', 
    }
]

const datas = [
    {
        id : 1, 
        firstName : 'Alexis', 
        lastName: 'Ritsonis',
        createdTimeStamp: new Date().getTime(),
        isAdmin: true
    },
    {
        id : 2, 
        firstName : 'Manos', 
        lastName: 'Merpos',
        createdTimeStamp: new Date().getTime(),
        isAdmin: false
    },
    {
        id : 3, 
        firstName : 'Anastasia', 
        lastName: 'Repoglou',
        createdTimeStamp: new Date().getTime(),
        isAdmin: false
    },
    {
        id : 4, 
        firstName : 'Tim', 
        lastName: 'Bartow',
        createdTimeStamp: new Date().getTime(),
        isAdmin: false
    },
    {
        id : 5, 
        firstName : 'Jimmy', 
        lastName: 'Reaves',
        createdTimeStamp: new Date().getTime(),
        isAdmin: false
    },
    {
        id : 6, 
        firstName : 'Jean', 
        lastName: 'Dupont',
        createdTimeStamp: new Date().getTime(),
        isAdmin: true
    },
    {
        id : 7, 
        firstName : 'Hassan', 
        lastName: 'Abil',
        createdTimeStamp: new Date().getTime(),
        isAdmin: false
    },
    {
        id : 8, 
        firstName : 'Frantz', 
        lastName: 'Birkval',
        createdTimeStamp: new Date().getTime(),
        isAdmin: false
    },
    {
        id : 9, 
        firstName : 'Liam', 
        lastName: 'Nelson',
        createdTimeStamp: new Date().getTime(),
        isAdmin: false
    },
    {
        id : 10, 
        firstName : 'John', 
        lastName: 'Doe',
        createdTimeStamp: new Date().getTime(),
        isAdmin: false
    },
]

const port = process.env.PORT || 5000;



server.get('/api', (req,res) => {
    res.send(datas)
})

server.post('/api', (req,res) => {
    const credentials =  {
        user: req.body.username, 
        pass: req.body.password
    }
    
    const {user, pass} = credentials

    const result = users.filter(item => {
        if(item.username === user && item.password === pass) {
            return item;
        }
    })

    if(result.length > 0) return res.send({isSuccess: true})

    return res.send({isSuccess: false, message : "Username or Password is not valid"})
 })

server.listen(port, () => {
    console.log(`app listens to port ${port}`)
})