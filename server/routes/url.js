const express = require("express");
const router = express.Router();
const { ShortUrl } = require("../models");

router.get("/", async (req, res) => {
  try {
    // Fetch all short links
    const allUrls = await ShortUrl.findAll();

    return res.json(allUrls);
  } catch (error) {
    console.error("Error fetching urls:", error);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
