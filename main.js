var entity = require('./entities.js');
var db = require("mongoose");
db.connect('mongodb://localhost/myblog');

var newtag = new entity.tag({ name: 'first tag', slug: 'sei la' });

newtag.save(function(err, tag) {

    if (err) {
        return console.error(err);
    }
});