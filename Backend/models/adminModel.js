// models/adminModel.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin'], default: 'admin' },
    email: { type: String, required: true },
  });

  const Admin = mongoose.model('Admin', adminSchema);
  export default Admin;