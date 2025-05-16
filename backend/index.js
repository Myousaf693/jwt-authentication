const express = require('express')
require('dotenv').config();
const userRoutes = require("./routes/userRoute")
const connectDB = require('./config/db')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// db connection
connectDB();
const port = process.env.PORT;
app.use(express.json());
// user routes
app.use('/api', userRoutes)
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})