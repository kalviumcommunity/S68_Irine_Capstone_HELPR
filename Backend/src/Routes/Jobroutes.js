const express = require('express');
const router = express.Router();
const Job = require('../Model/Job');

// GET all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new job
router.post('/', async (req, res) => {
    const { title, description, location, postedBy } = req.body;

    if (!title || !description || !location || !postedBy) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const newJob = new Job({ title, description, location, postedBy });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
