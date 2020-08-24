
const server = require("./app");

const PORT = process.env.PORT || 8080;

server.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port ' + PORT)
})