const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("db connection string/short-url");
        console.log(
            `Connected To DATABASE ${mongoose.connection.host} .............`
        );
    } catch (error) {
        console.log(`error in connection DB ${error}`);
    }
};

module.exports = connectDB;