import mongoose from "mongoose";

// Create dbConnection
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log("Could not connect to MongoDB. Error: " + error);
    }
}

export default {dbConnection};