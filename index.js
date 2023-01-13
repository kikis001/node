const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No tiene permiso para acceder'));
    }
  },
};

app.use(cors(options));
routerApi(app);
// los middlewares se declaran después del routing
app.use(logErrrors); //el orden en que los pongamos es el orden por el cual los ejecutaremos
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
