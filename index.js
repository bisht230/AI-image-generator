const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
//Enable body parser which is used to take body data 
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Set static folder     --> app.use() is a middleware
app.use(express.static(path.join(__dirname , 'public')));

app.use('/openai' , require('./routes/openAIRoutes'));

app.listen(port , ()=>console.log(`Server is up on port ${port}`))
