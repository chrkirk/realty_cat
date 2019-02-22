const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('index', {activeTab: 0}));

app.get('/contact', (req, res) => res.render('contact', {activeTab: 1}));


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));