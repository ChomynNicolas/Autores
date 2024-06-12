const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3001;
const cors = require('cors');
const autoresRoutes = require('./routes/autor.routes')

require('./config/mongoose.config')
const app = express();

app.use(express.json(), express.urlencoded({extended: true}), cors())

autoresRoutes(app);

app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
})