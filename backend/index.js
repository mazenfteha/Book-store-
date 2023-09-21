const  express = require('express') ;
const  dotenv =  require('dotenv');
require("./config/db");
dotenv.config();


const app = express()


app.get('/', (req,res) => {
    return res.status(234).send('MERN Stack Book Store project')
})

const PORT = 5000 
app.listen(PORT, () => {
    console.log(`App is listentng to port: ${PORT}`)
})

