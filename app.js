const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const Tracker = require('./models/tracker');
var date = new Date();
var tracker;

const dbURI = 'mongodb+srv://joellaprade:kZvCIqWpNNBNUn2K@jlapradecluster.xdnaioy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(port))
    .catch((err) => console.log(err))




app.use(express.urlencoded({ extended: true }))
app.use(express.json())




app.get('/', async (req, res) => {
    await getTracker();
    await Tracker.findByIdAndUpdate('65ce58a6957ee3abb0f32e51', {
        inicio: tracker.inicio + 1,
    })
    console.log('Logged to / at: ' + getTime())
    res.sendFile('/home/jlaprade/public_html/inicio.html')
})

app.get('/productos', async (req, res) => {
    await getTracker();
    await Tracker.findByIdAndUpdate('65ce58a6957ee3abb0f32e51', {
        productos: tracker.productos + 1,
    })
    console.log('Logged to productos at: ' + getTime())
    res.sendFile('/home/jlaprade/public_html/products/products.html');
})

app.get('/proyectos', async (req, res) => {
    await getTracker();
    await Tracker.findByIdAndUpdate('65ce58a6957ee3abb0f32e51', {
        proyectos: tracker.proyectos + 1,
    })
    console.log('Logged to proyectos at: ' + getTime())
    res.sendFile('/home/jlaprade/public_html/proyects/proyects.html')
})




const getTracker = async () => {
    tracker = await Tracker.findById('65ce58a6957ee3abb0f32e51')
} 

const getTime = () => {
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours() + 1}:${date.getMinutes()}:${date.getSeconds()}`
}