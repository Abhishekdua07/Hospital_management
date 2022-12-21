var mongoose = require('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose
    .connect("mongodb+srv://abhishek:believer@cluster0.z8ixsw7.mongodb.net/Hospital")
//console.log(con.connections);
// console.log("DB connection working"));
// mongoose.connect("mongodb+srv://abhishek:believer@cluster0.z8ixsw7.mongodb.net/Hospital");

module.exports = { mongoose };
