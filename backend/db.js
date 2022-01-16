const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://arsalan:${process.env.REACT_APP_ATLAS_PASS}@cluster0.76fym.mongodb.net/${process.env.REACT_APP_DB_NAME}?retryWrites=true&w=majority`

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to mongodb successfully")
    })
}

module.exports = connectToMongo;