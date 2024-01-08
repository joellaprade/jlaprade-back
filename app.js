const express = require('express');
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



app.get('/test', async (req, res) => {
    console.log('ran test')
    res.send(JSON.stringify({message: 'Working fucker'}));
})