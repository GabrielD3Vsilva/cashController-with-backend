const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://gabrielthedev:1981abcd.@cluster0.sspg6kv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(console.log('mongoDb connected'))
.catch((error)=>(`mongoDB Error ${error}`));

const UserSchema = mongoose.Schema
({
    nameUser: String,
    email: String,
    password: String
})

module.exports = mongoose.model('Users', UserSchema)
