import mongoose from "mongoose";

export const Mongo = {
    async connect() {
        console.log("wait connecting to the database");

        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                serverSelectionTimeoutMS: 70000, 
                socketTimeoutMS: 60000, 
                connectTimeoutMS: 60000,
            });

            const db = mongoose.connection;
            
            db.on('error', (err) => {
                console.error('MongoDB connection error:', err);
            });

            db.once('open', () => {
                console.log('MongoDB Atlas Connected');
            });

            return { success: true };
        } catch (error) {
            console.error('Error during mongo connection:', error);
            return { success: false, error };
        }
    }
};




