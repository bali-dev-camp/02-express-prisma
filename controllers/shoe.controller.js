const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ShoeController {
  static async getShoe(req, res) {
    const result = await prisma.shoe.findMany({});
    res.status(200).json(result);
  }

  static async getDetailShoe(req, res) {
    const result = await prisma.shoe.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (result === null) {
      res.status(404).json({ msg: 'Data not found' });
    } else {
      res.status(200).json(result);
    }
  }

  static async addShoe(req, res) {
    const result = await prisma.shoe.create({
      data: {
        name: req.body.name,
        merk: req.body.merk,
        qty: Number(req.body.qty),
        available: req.body.available === 'true' ? true : false,
      },
    });
    res.status(201).json(result);
  }

  static async editShoe(req, res) {
    const result = await prisma.shoe.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        merk: req.body.merk,
        qty: Number(req.body.qty),
        available: req.body.available === 'true' ? true : false,
      },
    });
    res.status(200).json(result);
  }

  static async deleteShoe(req, res) {
    const result = await prisma.shoe.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(result);
  }
}

module.exports = ShoeController;
