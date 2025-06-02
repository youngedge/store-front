const errorHandler = (err, req, res, next) => {
  // If status code is 200 (default), set to 500 for errors
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};

module.exports = errorHandler;