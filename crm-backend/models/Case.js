const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  assigned_to: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low"
  },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Closed"],
    default: "Open"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Case", caseSchema);
