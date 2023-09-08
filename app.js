const  express = require('express')
const app = express()

const dotenv = require('dotenv')

const connectDatabase = require('./config/db.js')

dotenv.config({ path : './config/config.env' })

//Connect to Database
connectDatabase()

//Creating own Middleware
const middleware = (req, res, next) =>{
    //setting up user variable gloobally
    req.user = "Sai"
    next()
}
app.use(middleware)

//Import  Routes

const jobs = require('./routes/jobs')


app.use("/api/v1",jobs)

const PORT = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ----- ${PORT}! ----- in ${process.env.NODE_ENV} mode!!`))