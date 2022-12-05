var mongoose = require('mongoose');
var schema = mongoose.Schema;
var UserSchmea = new schema({
    name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    phone: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('user', UserSchmea);