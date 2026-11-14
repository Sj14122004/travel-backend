
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URL!,
      { dbName: "tripunite" }
    );

    console.log(`DB Connected to ${connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};
