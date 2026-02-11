import Food from "../models/FoodModel.js";
import fs from "fs";
import path from "path";

/* ================= ADD FOOD ================= */
const addFood = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : null;

    const newFood = new Food({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image,
      category: req.body.category,
    });

    await newFood.save();

    res.status(201).json({
      success: true,
      message: "Food added successfully",
      food: newFood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding food",
      error: error.message,
    });
  }
};

/* ================= GET ALL ================= */
const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching food",
      error: error.message,
    });
  }
};

/* ================= SINGLE FOOD ================= */
const singleFood = async (req, res) => {
  try {
    const foodItem = await Food.findById(req.params.id);

    if (!foodItem) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(foodItem);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching food",
      error: error.message,
    });
  }
};

/* ================= UPDATE FOOD ================= */
const updateFood = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : undefined;

    const updateData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
    };

    // Only update image if new one uploaded
    if (image) {
      updateData.image = image;
    }

    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(500).json({
      message: "Error updating food",
      error: error.message,
    });
  }
};

/* ================= DELETE FOOD ================= */
const deleteFood = async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);

    if (!deletedFood) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    // Delete image file
    if (deletedFood.image) {
      const imagePath = path.join("uploads", deletedFood.image);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.status(200).json({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting food",
      error: error.message,
    });
  }
};

export { addFood, getAllFood, singleFood, updateFood, deleteFood };