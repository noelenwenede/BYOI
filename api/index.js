const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const serror = require("./utitlities/error");

const dashboards = require("./routes/dashboards/dashboards");


const PORT = process.env.PORT || 8080;


app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/dashboards", dashboards);



app.use(function (req, res) {
    res.status(404).json(serror('Not found', `Ooops, you're probably floating in space right now`));
})

app.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port ' + PORT)
})
