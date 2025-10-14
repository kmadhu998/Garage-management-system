import express from "express";
import { Pool } from "pg";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to PostgreSQL using DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // required for Render
  },
});

// Simple test route
app.get("/api/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    console.error("DB connection error:", err);
    res.status(500).json({ status: "error", message: "Database not reachable" });
  }
});

// Example route for services (if you have one)
app.get("/api/services", async (req, res) => {
  const result = await pool.query("SELECT * FROM services LIMIT 5");
  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
