const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//Handling uncaught exception
process.on("unCaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shuting down server due to Uncaught Exception");
    process.exit(1);
});

//config

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();



const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


//unhandled rejection

process.on("unhandledRejection", err=>{
    console.log(`Error: $(err.message)`);
    console.log('Shuting down server due to Unhandled Promise Rejection');

    server.close(() => { 
        process.exit(1);
    });
});



