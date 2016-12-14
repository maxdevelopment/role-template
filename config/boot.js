var fs = require('fs');
var path = require('path');

module.exports = function (app) {
    fs.readdirSync('./routes').forEach(function (file) {
        if (file.substr(-3) == '.js') {
            var module = path.parse(file).name;
            app.use('/api', require('../routes/' + module));
        }
    });
};
