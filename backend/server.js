// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


//  MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/buildpro";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

//  Schemas

const projectSchema = new mongoose.Schema({
  title: String,
  location: String,
  status: {
    type: String,
    enum: ["Planning", "In Progress", "Completed"],
    default: "Planning",
  },
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});

const propertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  priceType: { type: String, enum: ["month", "total"], default: "month" },
  description: String,
  location: String,
  beds: Number,
  baths: Number,
  area: Number,
  status: {
    type: String,
    enum: ["For Sale", "For Rent", "Not Available", "For Process"],
    default: "For Rent",
  },
  image: String,
  createdAt: { type: Date, default: Date.now },
});


//  Models
const Project = mongoose.model("Project", projectSchema);
const Property = mongoose.model("Property", propertySchema);

//  Routes
app.get("/", (req, res) => res.json({ message: "BuildPro backend running" }));

//  TEST ROUTE FOR FRONTEND
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend Connected Successfully!" });
});

//  Projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/projects", async (req, res) => {
  try {
    const saved = await new Project(req.body).save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🏠 Properties
app.get("/api/properties", async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.location) filter.location = { $regex: req.query.location, $options: "i" };

    const properties = await Property.find(filter).sort({ createdAt: -1 });
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/properties", async (req, res) => {
  try {
    const saved = await new Property(req.body).save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🚀 Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
