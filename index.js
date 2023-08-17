const { app, express } = require("./server")
const{ saucesRouter } = require("./routers/sauces.router")
const{ authRouter } = require("./routers/auth.router")
const port = 3000
const path = require("path")
const bodyParser = require("body-parser")

//connection database
require("./mongo")

//middleware
app.use(bodyParser.json())
app.use("/api/sauces", saucesRouter)
app.use("/api/auth", authRouter)

//routes
app.get("/", (req, res) => res.send("Salut!"))

//listen
app.use("/images", express.static(path.join(__dirname, "images")))
app.listen(port, () => console.log("Listening on port" + port))






  






