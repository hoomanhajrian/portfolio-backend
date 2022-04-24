const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const cors = require('cors');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


let data = '';

app.listen(port, () => {
    console.log(`listening to port ${port}`);
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
