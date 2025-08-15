const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/feedback', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(express.static('src'));

app.post('/feedback', (req, res) => {
    // Logique pour sauvegarder le feedback dans MongoDB
    res.status(201).send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
