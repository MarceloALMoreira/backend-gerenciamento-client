const bodyParser = require("body-parser");

const cors = require("cors");


const client = require("./clientRoute.js")

module.exports = app => {
    app.use(
        bodyParser.json(),
        cors(),
        client
    )
}