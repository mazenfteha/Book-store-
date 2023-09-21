const  express = require('express') ;
const  dotenv =  require('dotenv');

const bookRoute = require('./routes/bookRoutes')
require("./config/db");
dotenv.config();


const app = express()

// Middleware for parsing request body
app.use(express.json());


app.get('/', (req,res) => {
    return res.status(234).send('MERN Stack Book Store project')
})

app.use('/api/v1/books', bookRoute)

const PORT = 5000 
app.listen(PORT, () => {
    console.log(`App is listentng to port: ${PORT}`)
})

