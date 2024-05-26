require("dotenv").config();
var cors = require('cors')
const express = require ('express')
const Router = require ("./Routes/User.route.js")
const router = require('./Routes/Contact.route.js')
const app = express()
const connectDb = require("./utils/db.js");
const errorMiddleware = require('./middleware/error-middleware.js')
app.use(express.json())


app.use(errorMiddleware)
app.use(cors())
app.use("/api/User",Router)
app.use("/api/form",router)

const PORT=4000;
 
var corsOptions = {
  origin: 'http://localhost:5173/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });
});