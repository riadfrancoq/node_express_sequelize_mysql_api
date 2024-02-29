import  express  from "express";
import { config } from "dotenv";
import productRouter from './routes/productRouter.js';
import reviewsRouter from './routes/reviewRouter.js';
config();

const app = express();



//routes

// middlewares

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api/products', productRouter);
app.use('/api/reviews', reviewsRouter);

// Port

const PORT = process.env.PORT

// server 

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT} `)
});