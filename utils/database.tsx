import mongoose from "mongoose";
let isConnected = false
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.USERNAME}@tobi.z8plmj1.mongodb.net/?retryWrites=true&w=majority&appName=tobi`

export const connectToDB = async () => {
    console.log(isConnected)
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('connection ccurrently running')
        return
    }
    try {
        await mongoose.connect(uri, {
            dbName: process.env.DATABASE,
        })
        isConnected = true
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}
