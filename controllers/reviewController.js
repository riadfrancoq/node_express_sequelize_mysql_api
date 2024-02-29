import db from '../models/index.js';

// model 
const {reviews} = db;
const Review = reviews;


// Functions 


// 1. Add Review


export const addReview = async (req, res) => { 

    const {rating, description } = req.body;

    try {
        const review = await Review.create({rating, description});
        res.status(201).send(review);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: "Something unexpected happen"
        });
    }
};

// 2. Get All Reviews

export const getAllReviews = async (req, res ) => {

    try {

        const reviews = await Review.findAll({});
        res.status(200).send(reviews);
        
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: "Something unexpected happen"
        });
    }    
};