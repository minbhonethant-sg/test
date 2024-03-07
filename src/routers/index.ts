import express from "express";

const router = express.Router();

router.get("/host", (req, res) => {
  res.send("ehl");
});

export default router;
