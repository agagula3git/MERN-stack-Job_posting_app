const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const JobAds = require('./models/db');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost:27017/mern-stack', {useNewUrlParser: true}, err => {
    if(err){
        console.log('Attempt to connect to db failed '+ err);
    }else{
        console.log('A successful conncection to MongoDB!');
    }
});

app.use(cors({ origin: true, credentials: true }));

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/insertAd', (req, res) => {
    var job = new JobAds({
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        type: req.body.type,
        description: req.body.description,
        created_at: req.body.created_at
    });
    
    job.save((err, doc) => {
        if(!err){
            /*console.log(doc);*/
        }else{
            console.log("Error occured: "+ err);
        }
    });
})


app.get('/show-ads', (req, res)=>{
    JobAds.find({}, (err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error occured '+ err);
        }
    })
});

app.get('/show-ads/:id', (req, res)=>{
    JobAds.findOne({_id: req.params.id}, (err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error occured '+ err);
        }
    })
});

app.get('/', (req,res)=>{
    res.send('Hello Express');
})

app.listen(3001, ()=>{
    console.log('Server started on port 3001');
});
