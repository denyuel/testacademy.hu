module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/accounts') {
    if (!req.body.customerName || req.body.customerName.trim() === '') {
      return res.status(400).json({ error: "Customer name cannot be empty" });
    }
    if (req.body.balance < 0) {
      return res.status(400).json({ error: "Initial balance cannot be negative" });
    }
  }
  next();
};
