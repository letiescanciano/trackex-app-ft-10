const firebase = require('../config/firebase')

const authMiddleware = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403).json({ message: 'No token provided' })
  }
  console.log('headers', req.headers)
  const token = req.headers.authorization.split(' ')[1]
  console.log(token)
  try {
    const decodeValue = await firebase.auth().verifyIdToken(token)
    if (decodeValue) {
      req.firebaseUser = decodeValue
      console.log(decodeValue)
      return next()
    }
    res.status(403).json({ message: 'Not authenticated correctly' })
  } catch (er) {
    console.log(er)
    res.status(500).json(er.message)
  }
}

module.exports = authMiddleware
