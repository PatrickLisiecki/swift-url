const express = require("express");
const shortid = require("shortid");
const router = express.Router();
const { ShortUrl } = require("../models");

router.get("/", async (req, res) => {
  try {
    // Fetch all links
    const allUrls = await ShortUrl.findAll();

    return res.json(allUrls);
  } catch (error) {
    console.error("Error fetching urls:", error);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

router.post("/", async (req, res) => {
  try {
    // Get original url from the request
    const { origin } = req.body;
    // console.log(origin);

    // Create an entry with the original url and the short version
    const newUrl = ShortUrl.create({
      origin: origin,
      short: shortid.generate(),
    });

    return res.json(newUrl);
  } catch (error) {
    console.error("Error creating url:", error);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Get id from the parameters
    const id = req.params.id;

    // Ensure entry exists
    const entry = await ShortUrl.findByPk(id);

    if (!entry) {
      return res.status(404).json({ error: "Entry not found!" });
    }

    // Delete the entry
    await entry.destroy();

    return res.status(200).json({ message: "Entry deleted successfully!" });
  } catch (error) {
    console.error("Error deleting url:", error);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
