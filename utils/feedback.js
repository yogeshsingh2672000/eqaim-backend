import Feedback from "../models/Feedback.js";

const fetchFeedback = async () => {
  const data = await Feedback.find({});
  return data;
};

export { fetchFeedback };
