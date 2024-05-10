const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const ambulantaRoute = require('./routes/ambulanta');
const ambulantaEnRoute = require('./routes/ambulanta-en');
const ambulantaDeRoute = require('./routes/ambulanta-de');


const app = express();

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/ambulantabol', ambulantaRoute);
app.use('/ambulantabol/en', ambulantaEnRoute);
app.use('/ambulantabol/de', ambulantaDeRoute);
app.use(express.static('public'));//za slike


app.listen(3000, () => {
    console.log('Serving on port 3000');
});