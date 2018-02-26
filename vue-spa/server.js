import express from 'express';
const app = express();
const port = 5000;

app.use(express.static('public'));

app.set('views', './public');
app.set('view engine', 'ejs');

app.get('*', function (req, res) {
    res.render('index');
});

app.listen(port, function () {
    console.log('Running on ' + port + '...');
});