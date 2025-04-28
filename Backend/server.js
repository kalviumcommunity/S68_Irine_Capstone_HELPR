const express = require('express');
const connectDB = require("./src/Database/db");
const app = express();
require('dotenv').config({ path: "src/Config/.env" });

const port = process.env.PORT || 5000;
const url = process.env.DB_URL;

app.use(express.json());

const jobRoutes = require('./src/Routes/Jobroutes');
app.use('/api/jobs', jobRoutes);

const userRoutes = require('./src/Routes/Userroutes');
app.use('/api/users', userRoutes); 

app.get('/', (req, res) => {
    res.send('HELPR server is running!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, async () => {
    try {
        await connectDB(url);
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.error(error);
    }
});