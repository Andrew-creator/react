const express = require("express");
const cors = require("cors");
const users = require("./app/models/users")

const app = express();

users.loadUsers((users)=> {
  if (users == null) console.log("users list not loaded")
    else startServer()
})


function startServer() {
  var corsOptions = {
//    origin: "http://localhost:8081"
  };

  app.use(cors(corsOptions));

  // parse requests of content-type - application/json
  app.use(express.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

  // routes
  require('./app/routes/auth.routes')(app);
  require('./app/routes/user.routes')(app);

  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}
