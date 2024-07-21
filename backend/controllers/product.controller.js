// product.controller.js
const Product = require('../models/product.model');

const ProductController = {
    getAllProducts: (req, res) => {
        Product.getAllProducts((error, results, fields) => {
            if (error) {
                console.error('Error fetching products: ' + error.stack);
                res.status(500).json({ message: 'Failed to fetch products' });
                return;
            }
            res.json(results);
        });
    },

    getProductsByHilfsmittelnummer: (req, res) => {
        const {hilfsmittelnummer} = req.query;

        Product.getProductsByHilfsmittelnummer(hilfsmittelnummer, (error, results, fields) => {
            if (error) {
                console.error('Error fetching products by Hilfsmittelnummer: ' + error.stack);
                res.status(500).json({ message: 'Failed to fetch products by Hilfsmittelnummer' });
                return;
            }
            res.json(results);
        });
    },
    getData: (req, res) => {
        const criteria= {
           // activity: req.query.activity || '',
            allergies: req.query.allergies || '',
            tissueType: req.query.tissueType || '',
            aidNumber: req.query.aidNumber || '',
           // leg: req.query.leg || '',
            skin: req.query.skin || ''

        };

        Product.getProductsByCriteria(criteria, (err, results, fields) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send('Error retrieving data from the database.');
                return;
            }
            res.json(results);
        });
    }
};

module.exports = ProductController;
