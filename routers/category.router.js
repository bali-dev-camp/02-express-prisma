const { Router } = require("express");
const CategoryController = require("../controllers/category.controller");

const router = Router();

router.get("/category", CategoryController.getCategory);
router.post("/category", CategoryController.addCategory);
router.put("/category/:id", CategoryController.editCategory);
router.delete("/category/:id", CategoryController.deleteCategory);

module.exports = router;
