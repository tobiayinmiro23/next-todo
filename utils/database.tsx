
import mongoose from "mongoose";
let isConnected = false
// const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@tobi.z8plmj1.mongodb.net/?retryWrites=true&w=majority&appName=tobi`
const uri = `mongodb+srv://tobi:Collinss23@tobi.z8plmj1.mongodb.net/?retryWrites=true&w=majority&appName=tobi`
console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)
console.log(process.env.DATABASE)
export const connectToDB = async () => {
    console.log(isConnected)
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('connection currently running')
        return
    }
    try {
        await mongoose.connect(uri, {
            dbName: 'TodoApp',
        })
        isConnected = true
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}
