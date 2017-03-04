app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})