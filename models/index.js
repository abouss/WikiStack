var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wikistack');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Page, User;
var Schema = mongoose.Schema;

var pageSchema = new Schema({
  title: String,
  url_name: String,
  owner_id:   String,
  body:   String,
  date: { type: Date, default: Date.now },
  status: Number
});

var userSchema = new Schema({
  name:  {
      first: String,
      last: String
    },
  email: String
});

Page = mongoose.model('Page', pageSchema);
User = mongoose.model('User', userSchema);

//userSchema.virtual('full_route').get(function() {
//  return this.name.first + ' ' + this.name.last;
//});

pageSchema.virtual('url_name.full').get(function () {
    return this.url_name;
});


module.exports = {"Page": Page, "User": User};