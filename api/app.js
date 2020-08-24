const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const serror = require("./utitlities/error");

const dashboards = require("./routes/dashboards/dashboards");


app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/dashboards", dashboards);

app.get("/ping", (req, res) => {
    res.status(200).send("Ping").end();
})

app.use(function (req, res) {
    res.status(404).json(serror('Not found', `Ooops, you're probably floating in space right now`));
})


module.exports = app;
