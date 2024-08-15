import mongoose from "mongoose";
let isConnected = false

export const connectToDB = async () => {
    console.log(isConnected)
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('connection ccurrently running')
        return
    }
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/', {
            dbName: 'TodoApp',
        })
        isConnected = true
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}