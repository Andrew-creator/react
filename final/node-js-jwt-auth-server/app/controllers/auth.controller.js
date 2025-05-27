const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { addUser, findUserByNic } = require("../models/users");

exports.signup = (req, res) => {
  // Save User to Database
  if (addUser({name: req.body.username, email: req.body.email, password: bcrypt.hashSync(req.body.password, 8)})) {
    res.send({ message: "User registered successfully!" });
  } else {
    res.status(500).send({ message: err.message });
  }
};

exports.signin = (req, res) => {
  console.log("signin")
  let user=findUserByNic(req.body.username)
  if (user!=null) {
    console.log("Found user.")
    console.log("Found user. password is " + user.password)
    console.log("Compare " + req.body.password + " vs " + user.password)

    let passwordIsValid = req.body.password == user.password;
    /*
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    */

    console.log(" 1 " + passwordIsValid)

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    console.log("2")

    const token = jwt.sign({ id: user.id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });

    console.log("it's ok")

    res.status(200).send({
          id: user.id,
          name: user.name,
          email: user.email,
          accessToken: token
    });
  } else {
    console.log("User Not found")

    return res.status(404).send({ message: "User Not found." });
  }
};
