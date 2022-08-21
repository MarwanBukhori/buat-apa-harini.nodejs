const mongoose = require("mongoose");

const connectDB = (url) => {
    return mongoose.connect(url, {
        // maxPoolSize: 50,
        useUnifiedTopology: true,
        // wtimeoutMS: 2500,
        useNewUrlParser: true,
    });
};

module.exports = connectDB;