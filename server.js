import  express  from "express";
import { config } from "dotenv";
import productRouter from './routes/productRouter.js';
config();

const app = express();



//routes

// middlewares

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api/products', productRouter);

// Port

const PORT = process.env.PORT

// server 

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT} `)
});