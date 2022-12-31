function logErrrors(err, req, res, next) {
  next(err)
}

// al no ejecutar next, no sigue, por lo cual ahí acabaría
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler(err, req, res, next) {
  if(err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

module.exports = {
  logErrrors,
  errorHandler,
  boomErrorHandler
};
