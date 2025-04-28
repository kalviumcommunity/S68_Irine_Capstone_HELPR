const express = require('express');
const connectDB = require("./src/Database/db");
const jobrouter = require('./src/Routes/Jobroutes');
const app = express();

require('dotenv').config({
    path:"src/Config/.env"
});

const port = process.env.PORT || 5000;
const url = process.env.DB_URL;


app.use(express.json());
app.use('api/jobs',jobrouter);

app.listen(port,async()=>{
    try {
        await connectDB(url)
        console.log(`Server is running on port ${port}`)     
    } catch (error) {
        console.error(error)
    }
})

app.get('/', (req, res) => {
  res.send('HELPR server is running!');
});