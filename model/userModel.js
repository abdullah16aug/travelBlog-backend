const mongoose=require('mongoose')
const {Schema}=mongoose


const userSchema = new Schema({
    name:{type:String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt:Buffer
  },
  {timestamps: true,});
  const virtual = userSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const User = mongoose.model('User', userSchema);
module.exports=User