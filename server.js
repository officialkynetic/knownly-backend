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

app.get("/api/admin", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  if (token !== "admin123") {
    return res.status(403).json({ success: false, message: "Forbidden" });
  }

  res.status(200).json({ success: true, message: "Welcome Admin" });
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
