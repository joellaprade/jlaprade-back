const express = require('express');
const mongoose = require('mongoose');
const port = 8000;
const app = express();

//const dbURI = 'mongodb+srv://jlaprade:today2428M@nodetuts.3rfiajp.mongodb.net/events?retryWrites=true&w=majority'
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => {
//         app.listen(port)
//         console.log('listening')
//     })
//     .catch((err) => console.log(err))


app.use(express.urlencoded({ extended: true }))
// app.use(express.static('public'))
app.use(express.json())



app.get('/', (req, res) => {
    res.send('Working fucker');
})




app.get('/getEvents', (req, res) => {
    Event.find()
    .then(result => res.send(result))
})

app.get('/getBlogs', (req, res) => {
    Blog.find()
    .then(result => res.send(result))
})

app.get('/getBlogs/:id', (req, res) => {
    const id = req.params.id;
    holdId = id;
    res.sendFile('/home/viveahos/public_html/blogs/singleBlog.html')

})

app.get('/getBlog', (req, res) => {
    Blog.findById(holdId)
    .then(result => {
        holdId = 0;
        res.send(result)
    })
})