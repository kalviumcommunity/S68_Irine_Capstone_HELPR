const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String 
  },
  postedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  DatePosted: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Job', JobSchema);