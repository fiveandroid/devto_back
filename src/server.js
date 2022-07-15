
const express = require("express")
const routerUsers = require("./routes/user.route")
const routerPost = require("./routes/post.route")

const app = express();


// Middleware
app.use(express.json())
app.use("/users", routerUsers)
app.use("/post", routerPost)




app.get("/", (request, response) => {
    response.json({
      message: "Endpoint de Home, Bienvenido a nuestra API de DevTo"
    })
  })


module.exports = app