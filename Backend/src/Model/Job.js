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
        type: String,
    },
    postedBy: {
        type: String, 
    },
    datePosted: {
        type: Date,
        default: Date.now,
    },
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
