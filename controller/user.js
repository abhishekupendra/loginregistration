var User = require('../models/user');

exports.test = function (req, res) {
    res.send('Greeting from the test controller!');
};

exports.user_create = function (req, res,next) {
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });

    user.save(function (err) {
        if (err) return next(err);
        res.send('User Added!');
    })
};
