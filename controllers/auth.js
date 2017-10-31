const authController = {}

authController.login = (req, res) => {
  res.status(200).send({
    message: 'Success'
  })
}

module.exports = authController