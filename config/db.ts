import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const URI = process.env.MONGO_URI || '';
        mongoose.disconnect && await mongoose.disconnect();
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    } catch (err){
        if (err instanceof Error) {
            console.log(`Connection Error - ${err.message}`);
        }
        process.exit(1);
    }
}

export default connectDB;