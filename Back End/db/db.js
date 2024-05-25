const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://gabrielthedev:1981abcd.@cluster0.sspg6kv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",  {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log('mongoDb connected'))
.catch((error)=>(`mongoDB Error ${error}`));

const UserSchema = mongoose.Schema
({
    nameUser: String,
    email: String,
    password: String
})

const CashInitSchema = mongoose.Schema
({
    email: String,
    cashInit: Number
})

module.exports = {
    Users: mongoose.model('Users', UserSchema),
    CashInit: mongoose.model('CashInit', CashInitSchema)
} 
