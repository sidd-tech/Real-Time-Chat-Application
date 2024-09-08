const express = require('express');
const mongoose =require('mongoose');
const cors=require('cors');
const http=require('http');
const {Server}=require('socket.io');

const app=express();
const server=http.createServer(app);
const io= new Server(server,{
    cors:{
        origin: 'http://localhost:3000', // Frontend URL
        methods: ['GET', 'POST']
    }
});

//Middleware 
app.use(cors)
app.use(express.json())

mongoose.connect(process.env.MongoURI)
.then(console.log("Connected to MongoDB..."))
.catch(err=>console.log("Error connecting to MongoDB",err))

mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
