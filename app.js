const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const Tracker = require('./models/tracker');

const dbURI = 'mongodb+srv://joellaprade:kZvCIqWpNNBNUn2K@jlapradecluster.xdnaioy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(port))
    .catch((err) => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/productos', async (req, res) => {
    var data = await Tracker.findById('659c855c436a8377c2f9bf9e')
    console.log(data);
    // Tracker.findByIdAndUpdate('659c774f2d824d8a70c4eb0c', {
    //     inicio: inicio + 1
    // })
    res.sendFile('/home/jlaprade/public_html/products/products.html')
})