const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  // construir middlewares de forma dinámica, se usan las propiedades de clos closures
  return (req, res, next) => {
    const data = req[property];
    // req.body
    // req.params
    // req.query
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
