const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;

  // Validations
  if (!username || username.trim() === '') {
    return res.status(400).json({ error: "Username cannot be empty" });
  }

  if (!email || email.trim() === '') {
    return res.status(400).json({ error: "Email cannot be empty" });
  }

  if (!password || password.length < 8 || password.length > 16) {
    return res.status(400).json({
      error: "Password length should be greater than 8 or less than or equal to 16"
    });
  }

  // You can add DB logic here later

  res.status(201).json({
    message: "User registered successfully!",
    user: { username, email, dateOfBirth }
  });
});

module.exports = router;