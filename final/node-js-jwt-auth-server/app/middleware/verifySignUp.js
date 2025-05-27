const users = require("../models/users");

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  if (users.findUserByName(req.body.username) != null) {
    res.status(400).send({
      message: "Failed! Username is already in use!"
    });
    return;
  }

  // Email
  if (users.findUserByEmail(req.body.email)) {
    res.status(400).send({
      message: "Failed! Email is already in use!"
    });
    return;
  }

  next();
};

checkRolesExisted = (req, res, next) => {
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
