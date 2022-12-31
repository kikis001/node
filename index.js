const express = require('express');

const routerApi = require("./routes")
const { logErrrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = 3000;
app.use(express.json());

routerApi(app)
// los middlewares se declaran después del routing
app.use(logErrrors) //el orden en que los pongamos es el orden por el cual los ejecutaremos
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port)
