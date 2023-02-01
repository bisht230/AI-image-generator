const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
//Enable body parser which is used to take body data 
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/openai' , require('./routes/openAIRoutes'));

app.listen(port , ()=>console.log(`Server is up on port ${port}`))
