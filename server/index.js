const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./models/User');
require('./services/passport');

const app = express();
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.use(bodyParser.json());


mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log("Db Online");
});

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Your app is running on port ${PORT}`); // eslint-disable-line
});
