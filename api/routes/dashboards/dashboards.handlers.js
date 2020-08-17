const models = require("../../models/index");
const serror = require("../../utitlities/error");


const getDashboards = function(req, res) {

    models.dashboard.findAll({raw: true}).then(d => {
        if(d && d.length) {
            res.status(200).json(d)
        } else {
            let out = [{"id": 1, "createdAt": "2018-09-28T15:05:04.012Z", "updatedAt": "2018-09-28T15:05:04.012Z", "title": "test"}];
            res.status(200).json(out);
            // res.status(404).json(serror("Not found", `No dashboards found. Visit ${req.hostname}:${process.env.PORT}/dashboards/add to add a dummy item to dashboard` ))
        }
        console.log(d);
    }).catch(e => {
        console.log(e);
        res.status(503).json(serror(e.name, e.message))
    })

}

const addDashboard = function(req, res) {
    
    let out = {
        title: "Obus"
    }

    models.dashboard.create(out).then(d => {
        console.log(d);
    }).catch(e => {
        console.log(e);
    })
    res.status(200).json(out);
}


module.exports = {
    getDashboards,
    addDashboard
}