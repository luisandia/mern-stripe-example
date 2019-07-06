module.exports = function (req, res, next) {
    if (!req.user.credits<1) {
        return res.status(403).send({ error: 'Nout enough creditsp!' });
    }
    next();
};
