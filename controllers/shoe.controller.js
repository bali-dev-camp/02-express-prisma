const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ShoeController {
  static async getShoe(req, res) {
    const result = await prisma.shoe.findMany({});
    res.status(200).json(result);
  }

  static async getDetailShoe(req, res) {
    try {
      const result = await prisma.shoe.findUnique({
        where: { id: Number(req.params.id) },
        include: { category: true },
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

  static async addShoe(req, res) {
    try {
      const result = await prisma.shoe.create({
        data: {
          name: req.body.name,
          merk: req.body.merk,
          desc: req.body.desc,
          categoryId: Number(req.body.categoryId),
          price: Number(req.body.price),
          qty: Number(req.body.qty),
          available:
            (req.body.available === "true") | req.body.available ? true : false,
        },
      });
      res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ message: "Something error", err });
    }
  }

  static async editShoe(req, res) {
    try {
      const result = await prisma.shoe.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name: req.body.name ?? undefined,
          merk: req.body.merk ?? undefined,
          desc: req.body.desc ?? undefined,
          categoryId: req.body.categoryId
            ? Number(req.body.categoryId)
            : undefined,
          price: req.body.price ? Number(req.body.price) : undefined,
          qty: req.body.qty ? Number(req.body.qty) : undefined,
          available: req.body.available
            ? (req.body.available === "true") | req.body.available
              ? true
              : false
            : undefined,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ message: "Something error", err });
    }
  }

  static async deleteShoe(req, res) {
    try {
      const result = await prisma.shoe.delete({
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

module.exports = ShoeController;
