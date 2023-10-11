const  express = require('express') ;
const  dotenv =  require('dotenv');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require("./swagger.json")
const bookRoute = require('./routes/bookRoutes')
require("./config/db");
dotenv.config();


const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );


app.get('/', (req,res) => {
    return res.status(234).send('MERN Stack Book Store project')
})

app.use('/api/v1/books', bookRoute)

const PORT = 5000 
app.listen(PORT, () => {
    console.log(`App is listentng to port: ${PORT}`)
})

