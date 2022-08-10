const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/AssignmentForm", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    }).then(connected => console.log(`MongoDB Database connected with Host: ${connected.connection.host}`))
}

module.exports = connectDatabase;