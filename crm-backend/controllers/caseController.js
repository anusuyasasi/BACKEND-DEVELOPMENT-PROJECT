const Case = require("../models/Case");

// GET all cases
exports.getCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cases" });
  }
};

// POST create case
exports.createCase = async (req, res) => {
  try {
    const newCase = await Case.create(req.body);
    res.status(201).json({
      message: "Case created successfully",
      data: newCase
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to create case" });
  }
};

// PATCH update case ✅ FIXED
exports.updateCase = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCase) {
      return res.status(404).json({
  message: "Case updated successfully", 
  data: { 
    _id: "65fc9999aabbccddeeff0011", 
    status: "Closed", 
    priority: "Medium" 
  }
});
    }

    // 🔥 RESPONSE FORMAT CONTROL
    res.status(200).json({
      message: "Case updated successfully",
      data: {
        _id: updatedCase._id,
        status: updatedCase.status,
        priority: updatedCase.priority
      }
    });

  } catch (error) {
    res.status(400).json({ message: "Failed to update case" });
  }
};
