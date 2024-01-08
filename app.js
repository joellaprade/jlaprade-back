const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

const dbURI = 'mongodb+srv://joellaprade:kZvCIqWpNNBNUn2K@jlapradecluster.xdnaioy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(port))
    .catch((err) => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/productos', async (req, res) => {
    res.sendFile('/home/jlaprade/public_html/products/products.html')
})