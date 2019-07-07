module.exports = function (req, res, next) {
    console.log(req.user)
    if (req.user.credits < 1 ) {
        return res.status(403).send({ error: 'Nout enough creditsp!' });
    }
    next();
};
