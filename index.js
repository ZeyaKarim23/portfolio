const express = require('express');
const path = require('path');
const port = 3001;
const db = require('./config/mongoose');
const app = express();
const router = express.Router();
const User = require('./models/user');


app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    res.sendFile('/New folder/Portfolio/views/home.html')
});

app.post('/user',function(req,res){
    console.log(req.body);
    User.create({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    },function(err,newUser){
        if(err){
            console.log('error in creating newuser',err);
            return;
        }

        console.log('***',newUser);
        return res.redirect('back');
    });
});

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('Yup! My Express Server is running on port:',port);
});