const express = require('express');
const dotenv = require('dotenv');
const connectDB= require('./config/db.js');
const app=express();
const cors = require('cors');
const blogRouter = require('./routes/blogRoute.js');
app.use(cors());


const port = process.env.PORT||8001;
connectDB()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/blogs',blogRouter)
app.get('/', (req, res) => res.send('API running'));

app.listen(port, () => console.log(`Server started on port ${port}`));