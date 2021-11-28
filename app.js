const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(cors());

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let data = '';

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});


app.get('/', function (req, res) {
    console.log(data);
    res.render('pages/index', {
        data: data
    });

});

app.post('/message', (req, res) => {
    console.log(req.body);
    data = req.body;
    res.send("data set successfuly");
});

// index page


// // about page
// app.get('/about', function (req, res) {
//     res.render('pages/about');
// });
