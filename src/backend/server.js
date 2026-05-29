import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── DATA FILE PATH ─────────────────────────
const DATA_FILE = path.join(__dirname, "menu.json");

// ── LOAD / SAVE HELPERS ────────────────────
function loadMenu() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveMenu(menu) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(menu, null, 2), "utf-8");
}

// ── LOAD MENU ON STARTUP ───────────────────
let menu = loadMenu();

// ── ADMIN PASSWORD ─────────────────────────
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// ── MIDDLEWARE ─────────────────────────────
const rawOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const allowedOrigin = rawOrigin.replace(/\/$/, "");
app.use(
  cors({
    origin: allowedOrigin,
  })
);
app.use(express.json());

// ── RATE LIMITER ──────────────────────────
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { err: "Too many login attempts. Try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── AUTH MIDDLEWARE ────────────────────────
function requireAdmin(req, res, next) {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({ err: "Unauthorized" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ err: "Invalid or expired token" });
  }
}

// ── VERIFY PASSWORD ───────────────────────
app.post("/verify-password", loginLimiter, (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    return res.json({ token });
  } else {
    return res.status(401).json({ err: "Incorrect password" });
  }
});

// ── GET ALL MENU ITEMS ─────────────────────
app.get("/menu", (req, res) => {
  res.json(menu);
});

// ── ADD MENU ITEM ─────────────────────────
app.post("/menu", requireAdmin, (req, res) => {
  const { name, description } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ err: "Name is required" });
  }

  const newItem = {
    id: crypto.randomUUID(),
    name: name.trim(),
    description: description || "",
  };

  menu.push(newItem);
  saveMenu(menu);

  res.json({ ok: "Item added successfully" });
});


// ── UPDATE MENU ITEM ──────────────────────
app.put("/menu/:id", requireAdmin, (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;

  if (name !== undefined && !name.trim()) {
    return res.status(400).json({ err: "Name cannot be empty" });
  }

  const index = menu.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ err: "Item not found" });
  }

  menu[index] = {
    ...menu[index],
    name: name?.trim() || menu[index].name,
    description: description ?? menu[index].description,
  };

  saveMenu(menu);

  res.json({ ok: "Item updated successfully" });
});

// ── DELETE MENU ITEM ──────────────────────
app.delete("/menu/:id", requireAdmin, (req, res) => {
  const id = req.params.id;

  const exists = menu.some((item) => item.id === id);

  if (!exists) {
    return res.status(404).json({ err: "Item not found" });
  }

  menu = menu.filter((item) => item.id !== id);
  saveMenu(menu);

  res.json({ ok: "Item deleted successfully" });
});

// ── START SERVER ──────────────────────────
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});