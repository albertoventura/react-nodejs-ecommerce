const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

const ip = process.env.DBIP;
const port = process.env.DBPORT;
const dbName = process.env.DBNAME;
//const dbCol = process.env.DBCOL;

main().catch(err => console.log("main catch: ", err));

async function main() {
    await mongoose.connect(`mongodb://${ip}:${port}/${dbName}`);
        console.log("db sucessfully connected");
}

module.exports = main;