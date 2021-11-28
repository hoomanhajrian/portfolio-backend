const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let data = '';

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "hh-portfolio.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    console.log(data);
    if (data === '') {
        res.status(500).send("Data does not exist!")
    }
    else {
        res.render('pages/index', {
            data: data
        });
    };
});

app.post('/message', (req, res) => {
    console.log(req.body);
    data = req.body;
    res.send("data set successfuly");
});
