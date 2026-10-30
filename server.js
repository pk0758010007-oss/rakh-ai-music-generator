
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(__dirname));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "RAKH AI MUSIC",
    message: "Backend is running"
  });
});

app.post("/api/generate", async (req, res) => {
  const { prompt, genre, language } = req.body || {};

  if (!prompt || !String(prompt).trim()) {
    return res.status(400).json({
      error: "Please enter a song description."
    });
  }

  // AI audio generation will be connected here next.
  return res.status(501).json({
    error: "AI audio generation is not connected yet.",
    app: "RAKH AI MUSIC",
    received: {
      prompt: String(prompt).trim(),
      genre: genre || "Dancehall",
      language: language || "Swahili"
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`RAKH AI MUSIC running on port ${PORT}`);
});
