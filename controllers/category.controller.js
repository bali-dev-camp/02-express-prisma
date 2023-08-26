const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CategoryController {
  static async getCategory(req, res) {
    const result = await prisma.category.findMany();
    res.status(200).json(result);
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
          .code(400)
          .json({ message: "A category with this name is already in use" });
      } else {
        return res.code(400).json({ message: "Something error" });
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
        return res
          .code(400)
          .json({ message: "A category with this name is already in use" });
      } else {
        return res.code(400).json({ message: "Something error" });
      }
    }
  }

  static async deleteCategory(req, res) {
    const result = await prisma.category.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json(result);
  }
}

module.exports = CategoryController;
