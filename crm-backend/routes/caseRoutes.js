const express = require("express");
const router = express.Router();

const {
  getCases,
  createCase,
  updateCase
} = require("../controllers/caseController");

router.get("/", getCases);
router.post("/", createCase);
router.patch("/:id", updateCase);

module.exports = router;
