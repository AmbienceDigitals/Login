let express = require('express');
let bodyParser = require('body-parser')

let urlencodedParser = bodyParser.urlencoded({extended: false});

let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('form', {qs: req.query});
});

app.post('/form', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('success', {data: req.body });
});


app.listen(3000);   