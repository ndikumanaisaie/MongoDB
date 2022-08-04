import mongoose from "mongoose";


const dataSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  }
})

export default mongoose.model('Data', dataSchema);