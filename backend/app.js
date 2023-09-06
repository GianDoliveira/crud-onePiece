const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const cors = require('cors');

const crudRoutes = require('./routes/crud');

app.use(cors());
app.use(express.json());
app.use(crudRoutes);
app.use(express.static('frontend'));

app.listen(PORT, () => {
    console.log('Server listening on PORT:', PORT)
});