const express = require('express');
const router = express.Router();
const Job = require('../Model/Job');

// GET 
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST 
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

// PUT

router.put('/:id', async (req, res) => {
    const { title, description, location, postedBy } = req.body;

    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            { title, description, location, postedBy },
            { new: true, runValidators: true }
        );

        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
