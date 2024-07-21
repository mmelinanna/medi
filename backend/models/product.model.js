// product.model.js
const db = require('./db');

const Product = {

  getAllProducts: (callback) => {
    const query = 'SELECT * FROM products';
    db.query(query, callback);
  },

  getProductsByHilfsmittelnummer: (hilfsmittelnummer, callback) => {
    //console.log(hilfsmittelnummer)

    const query = 'SELECT * FROM products WHERE Hilfsmittelnummer = ?' // ? -> Placeholder
    db.query(query, [hilfsmittelnummer], callback);
  },

  getProductsByCriteria: (criteria, callback) => {
    console.log("criteria", criteria)
    //console.log(criteria.aidNumber, criteria.activity, criteria.legTissues)
    const query = 'SELECT * FROM products WHERE Gewebeart_des_Beins LIKE ? AND Hilfsmittelnummer LIKE ? AND Beschaffenheit_der_Haut LIKE ?';

    const queryValues = [
      // `%${criteria.activity || ''}%`,
      //`%${criteria.allergies || ''}%`,
      `${criteria.tissueType || ''}`,
      `${criteria.aidNumber || ''}%`,
      // `%${criteria.leg || ''}%`,
      `${criteria.skin || ''}`
    ];

    db.query(query, queryValues, (err, results) => {
      console.log(results);
      if (err) return callback(err);
      callback(null, results);
    });

  }


};

module.exports = Product;
