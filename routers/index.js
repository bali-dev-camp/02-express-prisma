const { Router } = require("express");

const shoeRouter = require("./shoe.router");
const categoryRouter = require("./category.router");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Server connected" });
});

router.use(shoeRouter);
router.use(categoryRouter);

module.exports = router;
