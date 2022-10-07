const express = require('express');
const app = express();
app.use(express.json());  
require('dotenv').config()
const port = 8000;
const cors = require('cors');
app.use(cors({
    origin:"http://localhost:3000" 
}));

app.use(express.urlencoded({ extended: true }));

//config
require('./config/mongoose.config');
//routes
require('./routes/recipe.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );