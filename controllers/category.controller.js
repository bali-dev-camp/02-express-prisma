const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CategoryController {
  static async getCategory(req, res) {
    const result = await prisma.category.findMany();
    res.status(200).json(result);
  }

  static async getDetailCategory(req, res) {
    try {
      const result = await prisma.category.findUnique({
        where: { id: Number(req.params.id) },
      });

      if (result === null) {
        res.status(404).json({ msg: "Data not found" });
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      return res.status(400).json({ message: "Something error", err });
    }
  }

  static async addCategory(req, res) {
    try {
      const result = await prisma.category.create({
        data: {
          name: req.body.name,
        },
      });

      res.status(201).json(result);
    } catch (err) {
      if (err.code === "P2002") {
        return res
          .status(400)
          .json({ message: "A category with this name is already in use" });
      } else {
        return res.status(400).json({ message: "Something error", err });
      }
    }
  }

  static async editCategory(req, res) {
    try {
      const result = await prisma.category.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name: req.body.name,
        },
      });

      res.status(200).json(result);
    } catch (err) {
      if (err.code === "P2002") {
        return res.status(400).json({
          message: "A category with this name is already in use",
          err,
        });
      } else {
        return res.status(400).json({ message: "Something error", err });
      }
    }
  }

  static async deleteCategory(req, res) {
    try {
      const result = await prisma.category.delete({
        where: {
          id: Number(req.params.id),
        },
      });

      res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ message: "Something error", err });
    }
  }
}

module.exports = CategoryController;
