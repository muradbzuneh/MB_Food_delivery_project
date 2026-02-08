import express from 'express';
import { addFood, getAllFood, singleFood, updateFood, deleteFood } from '../controller/foodControllers.js';
import multer from 'multer';
const router = express.Router();
const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/add', upload.single('image'), addFood);
router.get('/all', getAllFood);
router.get('/:id', singleFood);
router.put('/update/:id', upload.single('image'), updateFood);
router.delete('/delete/', deleteFood);

export default router; 