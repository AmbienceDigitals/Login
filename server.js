let express = require('express');
const users = [];

let app = express();


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('register.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', (req, res) => {
    try {
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {
    try {
        
    } catch {
        
    }
    res.render('index.ejs', {data: req.body});
});

console.log(users)
app.listen(3000);