const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend server running",
  });
});

app.get("/status", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is active",
    data: {
      status: "running",
    },
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Health check passed",
    data: {
      uptime: process.uptime(),
      timestamp: Date.now(),
    },
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});
