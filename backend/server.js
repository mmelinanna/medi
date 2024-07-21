const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/product.routes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the product API.' });
  });
  
// Product routes
app.use('/api', productRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});