const express = require('express');
const Job = require('../Model/Job');
const jobrouter = express.Router();

jobrouter.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = jobrouter;
