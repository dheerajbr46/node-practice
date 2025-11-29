const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

module.exports = connectDb;