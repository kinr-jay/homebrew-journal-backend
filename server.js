// ENV variables
require("dotenv").config()
const { PORT = 3000, NODE_ENV = "development" } = process.env

// CORS
const cors = require("cors")
const corsOptions = require("./config/cors.js")

// Express
const express = require("express")
const app = express()

// Logger
const morgan = require("morgan")

// Middleware
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan("dev"))

// Routes

app.get("/", (req, res) => {
  res.send("<h1>Heeeyy everybody, it's Alex Merced.</h1>")
})

const brewsController = require("./controllers/brews.js")
app.use("/brews", brewsController)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
