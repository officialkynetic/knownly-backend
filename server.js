const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend server running");
});

app.get("/status", (req, res) => {
  res.json({
    status: "running",
    message: "Server is active",
  });
});

app.get("/health", (req, res) => {
  res.json({
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
