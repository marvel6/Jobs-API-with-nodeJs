require('dotenv').config()


const connectionDB = require('./db/connect')
const connectionModel = require('./models/product')
const populates = require('./products.json')



const start = async()=>{
    try{
        await connectionDB(process.env.MONGODB_URI)
        await connectionModel.deleteMany()
        await connectionModel.create(populates)
        console.log('success')
        process.exit(0)
    }catch(err){
        console.log('error message')
        console.log(err)
        process.exit(1)
    }
}

start()