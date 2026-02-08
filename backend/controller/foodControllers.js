import mongoose from "mongoose";
import Food from "../models/FoodModel.js";
import fs from 'fs';

 const addFood = async (req, res) => {    
    let image = req.file ? req.file.path : null;
    const food = mongoose.model("Food", Food.schema);
    try {
        const newFood = new food({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: image,
            category: req.body.category
        });
        await newFood.save();
        res.status(201).json({ message: "Food added successfully", food: newFood });
    } catch (error) {
        res.status(500).json({ message: "Error adding food", error: error.message });
    }
};
const getAllFood = async (req, res) => {
    try {
        const food = mongoose.model("Food", Food.schema);
        const foods = await food.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: "Error fetching food", error: error.message });
    }
};
const  singleFood = async (req, res) => {
    try {
        const food = mongoose.model("Food", Food.schema);
        const foodItem = await food.findById(req.params.id);
        if (!foodItem) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.status(200).json(foodItem);
    } catch (error) {
        res.status(500).json({ message: "Error fetching food", error: error.message });
    }
};
const updateFood = async (req, res) => {
    let image = req.file ? req.file.path : null;
    try {
        const food = mongoose.model("Food", Food.schema);
        const updatedFood = await food.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: image,
                category: req.body.category
            },
            { new: true }
        );
        if (!updatedFood) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.status(200).json(updatedFood);
    } catch (error) {
        res.status(500).json({ message: "Error updating food", error: error.message });
    }
};
const deleteFood = async (req, res) => {
    try {
        const food = mongoose.model("Food", Food.schema);
        const deletedFood = await food.findByIdAndDelete(req.params.id);    
        if (!deletedFood) {
            return res.status(404).json({ message: "Food not found" });
        }
        fs.unlink(`uploads/${deletedFood.image}`, () => {});
        res.status(200).json({ message: "Food deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting food", error: error.message });
    }
};

export { addFood, getAllFood, singleFood, updateFood, deleteFood };       