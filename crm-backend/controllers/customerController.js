const Customer = require("../models/Customer");

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};

exports.addCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  res.json(customer);
};

exports.updateCustomer = async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};
