const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log(process.env.DB_URI)
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(con =>{
        console.log(`MongoDB Database Connected with HOST: ${con.connection.host}`)
    });
};

module.exports = connectDatabase