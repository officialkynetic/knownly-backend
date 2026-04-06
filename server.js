const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GET / - Welcome message
app.get('/', (req, res) => {
  res.send('Backend server running');
});

// GET /status - JSON response
app.get('/status', (req, res) => {
  res.json({
    status: 'running',
    message: 'Server is active'
  });
});

// GET /health - Extra endpoint (optional but recommended)
app.get('/health', (req, res) => {
  res.json({
    uptime: process.uptime(),
    timestamp: Date.now()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});