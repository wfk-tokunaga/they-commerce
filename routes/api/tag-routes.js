const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


router.get('/', (req, res) => {
    // find all tags
    // be sure to include its associated Product data
    // be sure to include its associated Products
    console.log(`====================`);
    Tag.findAll({
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
            }]
        })
        .then(dbTagData => {
            res.status(200).json(dbTagData);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


// NEED TO FIX PRODUCTS
// find a single tag by its `id`
router.get('/:id', (req, res) => {
    Tag.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            // THIS MIGHT NEED UPDATING
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }]
    }).then(dbTagData => {
        if (!dbTagData) {
            res.status(404).json({ message: "No tag found that that ID" });
            return;
        }
        res.status(200).json(dbTagData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// create a new tag
router.post('/', (req, res) => {
    console.log(`====================`);
    Tag.create({
            tag_name: req.body.tag_name,
        })
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
    console.log(`====================`);
    Tag.update({
        tag_name: req.body.tag_name,
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbTagData => {
        if (!dbTagData) {
            res.status(404).json({ message: "No tag found with that ID" });
            return;
        }
        res.status(400).json({ message: "Tag updated!" });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbTagData => {
        if (!dbTagData) {
            res.status(404).json({ message: "No caregory found with that ID" });
            return;
        }
        res.status(400).json({ message: "Tag deleted!" });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;