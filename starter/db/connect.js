const mongoose = require("mongoose");

const connectionString =
    "mongodb+srv://marwanbukhori:Mmmb0501@nodeexpressproject.ytxgljk.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        usenewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;