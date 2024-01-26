const express = require("express");

const routes = require("./routes");

const app = express();

const port = 3333 | undefined;

routes(app);

app.listen(port, () => console.log(`Servidor no http://localhost:${port}`));

module.exports = app;
