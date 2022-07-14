
const express = require("express")
const routerUsers = require("./routes/user.route")

const app = express();


// Middleware
app.use(express.json())
app.use("/users", routerUsers)


app.get("/", (request, response) => {
    response.json({
      message: "Endpoint de Home, Bienvenido a nuestra API de DevTo"
    })
  })


module.exports = app