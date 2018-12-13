const config = require('../config.json');
var mongoose = require('mongoose');
mongoose.connect(config.connectionString, callback);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Post: require('../posts/post.model'),
};
