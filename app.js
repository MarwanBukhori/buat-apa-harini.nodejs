const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT || 3000, () =>
            console.log("Server is running...")
        );
        // app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (err) {
        console.log(err.message);
    }
};

start();