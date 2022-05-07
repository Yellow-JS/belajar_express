const mongoose = require( 'mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  nik:  Number, // String is shorthand for {type: String}
  nama: String,
  wa:   String,
  pass:   String
},{timestamps:true});
const User = mongoose.model('User',userSchema)

module.exports = User