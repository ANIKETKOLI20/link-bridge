import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  order: { type: Number, required: true },
});

const Link = mongoose.model('Link', linkSchema);
export default Link;
