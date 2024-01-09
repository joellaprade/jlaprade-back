const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const Tracker = require('./models/tracker');
var tracker = Tracker.findById('659c855c436a8377c2f9bf9e')
.then(result => console.log(result))

const dbURI = 'mongodb+srv://joellaprade:kZvCIqWpNNBNUn2K@jlapradecluster.xdnaioy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(port))
    .catch((err) => console.log(err))




app.use(express.urlencoded({ extended: true }))
app.use(express.json())




app.get('/productos', async (req, res) => {
    console.log(tracker.productos)
    await Tracker.findByIdAndUpdate('659c855c436a8377c2f9bf9e', {
        inicio: tracker.inicio,
        productos: 2,
        proyectos: tracker.proyectos
    })
    res.sendFile('/home/jlaprade/public_html/products/products.html')
})