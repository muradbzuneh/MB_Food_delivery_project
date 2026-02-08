import express from 'express';
import { addFood } from '../controller/foodControllers.js';
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

export default router; 