import express from 'express';
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.render('index.html');
});

app.listen(port, function () {
    console.log('Running on ' + port + '...');
});
