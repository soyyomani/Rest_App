const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./utlis/db");
const app = require('./app');

 

const PORT = process.env.PORT || 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});

