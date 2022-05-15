const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', (req, res) => {
    // be sure to include its associated Products
    console.log(`====================`);
    Category.findAll({
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock']
            }]
        })
        .then(dbCategoryData => {
            res.status(400).json(dbCategoryData);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// find one category by its `id` value
router.get('/:id', (req, res) => {
    console.log(`====================`);
    Category.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock']
            }]
        })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: "No category found with that id." })
                return;
            }
            res.json(dbCategoryData);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    // be sure to include its associated Products
});

// create a new category
router.post('/', (req, res) => {
    console.log(`====================`);
    Category.create({
            category_name: req.body.category_name,
        })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
    console.log(`====================`);
    Category.update({
        category_name: req.body.category_name,
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: "No caregory found with that ID" });
            return;
        }
        res.status(400).json({ message: "Category updated!" });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: "No caregory found with that ID" });
            return;
        }
        res.status(400).json({ message: "Category deleted!" });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;