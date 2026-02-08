import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assest'

const Add = () => {
const [image, setImage] = useState(false)
  return (
    <div>
      <form action="">
        <div>
          <p>Upload img</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_icon} alt="Upload" />
          </label>
          <input onChange ={(e) => setImage(e.target.files[0])} type="file" />
        </div>
        <div>
          <p>Add product</p>
          <input type="text" name='name  ' placeholder='Title' />
        </div>
        <div>
           <p>product description</p>
           <textarea name="description" id="" cols={30} rows={10} placeholder='write contents here'></textarea>
        </div>
        <div>
          <div>
            <p>product category</p>
            <select name="category" id="category">
              <option value="appetizer">Appetizer</option>
              <option value="maincourse">Main Course</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div>
            <p>product price</p>
            <input type="number" name="price" placeholder="Price in USD" />
          </div>
        </div>
          <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default Add