const { Router } = require("express");
const ShoeController = require("../controllers/shoe.controller");

const router = Router();

router.get("/shoe", ShoeController.getShoe);
router.get("/shoe/:id", ShoeController.getDetailShoe);
router.post("/shoe", ShoeController.addShoe);
router.put("/shoe/:id", ShoeController.editShoe);
router.delete("/shoe/:id", ShoeController.deleteShoe);

module.exports = router;
