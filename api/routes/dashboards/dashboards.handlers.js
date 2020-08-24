const models = require("../../models/index");
const serror = require("../../utitlities/error");


const getDashboards = function(req, res) {

    models.dashboard.findAll({raw: true}).then(d => {
        res.status(200).json(d);
    }).catch(e => {
        res.status(503).json(serror(e.name, e.message))
    })

}

const addDashboard = function(req, res) {
    
    let out = {
        title: "Obus"
    }

    models.dashboard.create(out).then(d => {
        res.status(200).json(d);
    }).catch(e => {
        res.status(503).json(serror(e.name, e.message))
    })
}


module.exports = {
    getDashboards,
    addDashboard
}