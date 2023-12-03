const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");

const fileUpload = require("express-fileupload");
const cloudinary = require('cloudinary').v2;
const bodyparser = require('body-parser');

app.use(express.json({limit:'600mb'}));
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.urlencoded({limit: "50mb", extended: true }));


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


//Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);


//Middleware
app.use(errorMiddleware);

module.exports = app