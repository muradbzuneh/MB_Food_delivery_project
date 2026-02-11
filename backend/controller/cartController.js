import Cart from '../models/cartModel.js';
import Food from '../models/FoodModel.js'

const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('items.food');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
 const addToCart = async (req, res) => {
    try {
        const { foodId } = req.body;
        const foodItem = await Food.findById(foodId);
        if (!foodItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
       let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
        cart = await Cart.create({
            user: req.user._id,
            items: []
        });
        } 
        const itemIndex = cart.items.findIndex(item => item.food.toString() === foodId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += 1;
        } else {
            cart.items.push({ food: foodId, quantity: 1 });
        }
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};  

 const removeFromCart = async (req, res) => { 
    try {
        const { foodId } = req.body;
        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const itemIndex = cart.items.findIndex(item => item.food.toString() === foodId);
        if (itemIndex > -1) {
            if (cart.items[itemIndex].quantity > 1) {
                cart.items[itemIndex].quantity -= 1;
            } else {
                cart.items.splice(itemIndex, 1);
            }
            await cart.save();
            res.json(cart);
        }
        else {
            res.status(404).json({ message: 'Food item not found in cart' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

 const clearCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        cart.items = [];
        await cart.save();
        res.json(cart);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
const checkout = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id }).populate('items.food');   
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const totalPrice = cart.items.reduce((total, item) => total + item.food.price * item.quantity, 0);
        cart.items = [];
        await cart.save();
        res.json({ message: 'Checkout successful', totalPrice });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const cartController = {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
  checkout
};

export default cartController;   