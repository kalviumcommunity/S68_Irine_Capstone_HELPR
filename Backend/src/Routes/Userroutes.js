const express = require('express');
const router = express.Router();
const User = require('../Model/User');

router.post('/', async (req, res) => {
  const { name, email, role } = req.body;
  
  try {
    const user = new User({ name, email, role });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;