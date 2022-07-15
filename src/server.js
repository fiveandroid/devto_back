
const express = require("express")
const cors = require("cors")
const routerUsers = require("./routes/user.route")
const routerPost = require("./routes/post.route")
const routerAuth = require("./routes/auth.route")

const app = express();


// Middleware
app.use(cors())
app.use(express.json())

// Middleware de ruta
app.use("/users", routerUsers)
app.use("/login", routerAuth)
app.use("/post", routerPost)




app.get("/", (request, response) => {
    response.json({
      message: "Endpoint de Home, Bienvenido a nuestra API de DevTo"
    })
  })


module.exports = app