import db from '../models/index.js';

const {products} = db;
// Create main Model 

const Product = products;

// main work 

// 1. create product

export const addProduct = async (req, res) => { 

const { title, price, description, published = false} = req.body;
try {
    const product = await Product.create({
        title,
        price,
        description,
        published
    });
    res.status(200).send(product);
} catch (error) {
    console.error(error);
    res.status(404).json({
        message: "Something unexpected happen"
    });
};

};

// 2. Get all products

export const getAllProducts = async (req, res) => {

    try {
        const products = await Product.findAll({});
        
        res.status(200).send(products);
    } catch (error) {
        console.error(error);
    res.status(404).json({
        message: "Something unexpected happen"
    }); 

};

};

// 3. Get Single Product

export const getOneProduct = async (req, res) => {

    const {id} = req.params;

    try {
        const product = await Product.findOne({where: { id: id }});
        res.status(200).send(product);
    } catch (error) {
        console.error(error);
    res.status(404).json({
        message: "Something unexpected happen"
    });

};

};

// 4. Update Product

export const updateProduct = async (req, res) => {

    const {id} = req.params;
    console.log(id)
    const {title, price, description, published} = req.body;
    try {
        const product = await Product.update({title, price, description, published}, {where: {id: id}});
        res.status(200).send(product);
    } catch (error) {
        console.error(error);
    res.status(404).json({
        message: "Something unexpected happen"
    });

};

};

// 5. Delete Product

export const deleteProduct = async (req, res) => {

    const {id} = req.params;
    try {
        const product = await Product.destroy({where: {id: id}})
        res.status(200).send("Product is Deleted Succesfully");
    } catch (error) {
        console.error(error);
    res.status(404).json({
        message: "Something unexpected happen"
    }); 

};

};

// 6. Get published product

export const getPublishedProduct = async (req, res) => {

    try {
        const products = await Product.findAll({where: {published: true}})
        res.status(200).send(products)
    } catch (error) {
        console.error(error);
        res.status(404).json({
        message: "Something unexpected happen"
    }); 

};

};