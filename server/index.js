const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Your app is running on port ${PORT}`); // eslint-disable-line
});
