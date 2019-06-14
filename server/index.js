const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const app = express();
require('./routes/authRoutes')(app);


mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log("Db Online");
});

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Your app is running on port ${PORT}`); // eslint-disable-line
});
