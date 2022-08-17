require('dotenv').config()
const express = require('express');
const app = express()
const connectDB = require('./db/connect')
const routers = require('./routes/products')
require('express-async-errors')
const error_handler = require('./middleware/error-handler')
const not_found = require('./middleware/not-found')
const port = process.env.PORT || 5000

//middleware
app.use(express.json());



app.get('/',(req,res)=>{
    res.status(200).send(`<h1>products</h1><a href="/api/v1/products">Products route</a>`)
})

app.use('/api/v1/products',routers)
app.use(error_handler)
app.use(not_found)

const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port,console.log(`server is listening on port ${port}`))
            
        } catch (error) {
            console.log(error)
        }

}

start()




