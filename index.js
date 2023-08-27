import express from "express";
import feedbackRoutes from "./routes/feedbackRoute.js";
import cors from "cors";
import connectToMongo from "./config/database.js";

// connecting DB
connectToMongo();

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Middleware to handle URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Define your API routes

// check if endpoint is working or not
app.get("/hi", (req, res) => {
  res.send("Hello, this is the root endpoint!");
});

// Example route: POST request to '/api/data'
app.use("/api/feedback", feedbackRoutes);

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
