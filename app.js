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


app.get('/', (req, res) => {
    res.send(data);
});

app.post('/message', (req, res) => {
    console.log(req.body);
    data = req.body;
    res.send("data set successfuly");
});

// index page
// app.get('/', function (req, res) {
//     var mascots = [
//         { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
//         { name: 'Tux', organization: "Linux", birth_year: 1996 },
//         { name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
//     ];
//     var tagline = "No programming concept is complete without a cute animal mascot.";

//     res.render('pages/index', {
//         mascots: mascots,
//         tagline: tagline
//     });

// });

// // about page
// app.get('/about', function (req, res) {
//     res.render('pages/about');
// });
