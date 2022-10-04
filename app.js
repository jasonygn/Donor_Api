const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require('./models/Post');

const DB_CONNECTION = "mongodb+srv://dbuser_01:$lugyan77$@cluster0.kz00hur.mongodb.net/db_donor"; 
const PORT = 4000; 


//app.use(express.static(__dirname + '/views/style.css'));

app.use(cors());
app.use(bodyParser.json()); 
//we can do app.use(auth)

app.set('view engine', 'ejs');

const postsRoute = require('./routes/posts');
//const { mongo } = require('mongoose');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");   
})

app.get('/view', (req, res) => {
    Post.find({}, function(err, posts) {
        res.render('index', {
            postsList: posts 
        })
    })
})

app.get('/tview', (req, res) => {
    Post.find({}, function(err, posts) {
        res.render('index2', {
            postsList: posts 
        })
    })
})

mongoose.connect(DB_CONNECTION, () =>
    console.log('MongoDB Connection Successful!')
);

app.listen(PORT);
console.log(`Server is listening on: ${PORT}`);    


