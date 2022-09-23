const User = require('../models/user');

const authMiddleware = async (req, res, next) => {

  try {
    const { uid } = req.session;
    const user = await User.findOne({ _id: uid });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (err) {
    res.status(401);
  }

};

module.exports = authMiddleware;