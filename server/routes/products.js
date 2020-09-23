var express = require('express');
var router = express.Router();
const models = require('../models/index');
const path = require('path');
const API_SERVER = "http://localhost:3001";


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const page = req.query.page || 1
    const limit = req.query.limit || 3
    const offset = page * limit - limit

    const dataProducts = await models.Products.findAndCountAll({
      order: [
        ['createdAt', 'ASC']
      ],
      limit,
      offset
    })

    const totalPage = Math.ceil(dataProducts.count / limit)
    const response = {
      totalPage,
      data: dataProducts.rows
    }
    response.test = 'test'
    res.json(response)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

/* find product details */
router.get('/:id', async (req, res) => {
  try {
    const catalog = await models.Products.findByPk(req.params.id)
    res.json(catalog);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, rate, description, price, brand, detailProduct, capacities } = req.body;

    const file = req.files.image
    const fileName = file.name.toLowerCase().replace("", Date.now()).split(' ').join('-')
    await file.mv(path.join(__dirname, "..", "public", "images", fileName))

    const catalog = await models.Products.create({
      title,
      rate: Number(rate),
      description,
      price,
      brand,
      detail_product: detailProduct,
      image: `${API_SERVER}/images/${fileName}`,
      capacities: capacities.split(',')
    })
    res.json(catalog)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

/* Delete */
router.delete('/:id', async (req, res) => {
  try {
    const delProducts = await models.Products.findByPk(req.params.id)
    if (delProducts) {
      await models.Products.destroy({
        where: {
          id: req.params.id
        }
      })
      res.json(delProducts);
    }

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

/* Edit */
router.put('/:id', async (req, res) => {
  try {
    const catalog = await models.Products.update({
      vote: req.body.vote,

    }, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    res.json(catalog)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})

module.exports = router;
