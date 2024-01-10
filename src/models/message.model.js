import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
});

export default mongoose.model('Message', messageSchema);