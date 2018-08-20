var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: String,
    name: String,
    password: String,
    regdate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('user', userSchema);