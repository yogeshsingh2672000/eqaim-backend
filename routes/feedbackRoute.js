import express from "express";
const router = express.Router();
import { fetchFeedback } from "../utils/feedback.js";

router.get("/all", async (req, res) => {
  try {
    const data = await fetchFeedback();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

export default router;
