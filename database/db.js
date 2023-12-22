import mongoose from "mongoose";


const dbConnection = async () => {
    const DB_URI = "mongodb+srv://Malav:malav@cluster0.h11yng5.mongodb.net/"
    try {
        await mongoose.connect(DB_URI, { useUnifiedTopology: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default dbConnection;