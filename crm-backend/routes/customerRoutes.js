const router = require("express").Router();
const {
  getCustomers,
  addCustomer,
  updateCustomer
} = require("../controllers/customerController");

router.get("/", getCustomers);
router.post("/", addCustomer);
router.patch("/:id", updateCustomer);

module.exports = router;
