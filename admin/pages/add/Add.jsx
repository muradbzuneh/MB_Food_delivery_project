import React, { useState } from 'react'
import axios from 'axios'
import { assets } from '../../assets/assest'

import './Add.css'
import { toast } from 'react-toastify'

const Add = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    description: '',
    category: 'Salad',
    price: ''
  })
const url = 'http://localhost:3000'
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
   

    if (!image) {
      alert('Please upload an image')
      return
    }

    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('price', data.price)
    formData.append('image', image)

    try {
      const res = await axios.post(
        `${url}/api/foods/add`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )

      if (res.data.success) {
        alert('Product added successfully ✅')
        setData({ name: '', description: '', category: 'Salad', price: '' })
        setImage(false)
      }
      toast.success(res.data.message) // Show success toast
    } catch (error) {
      console.error(error)
      toast.error('Error adding product ❌')
    }
 e.preventDefault()
  }

  return (
    <div className="add">
      <form className="add-form" onSubmit={onSubmitHandler}>
        {/* Upload Image */}
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.uploade}
              alt="upload"
            />
          </label>
          <input
            id="image"
            type="file"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Product Name */}
        <div className="add-input">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={data.name}
            onChange={onChangeHandler}
            required
          />
        </div>

        {/* Description */}
        <div className="add-input">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write contents here"
            value={data.description}
            onChange={onChangeHandler}
            required
          />
        </div>

        {/* Category & Price */}
        <div className="add-category-price">
          <div className="add-input">
            <p>Category</p>
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
            >  <option value="appetizer">Rolls</option>
              <option value="pizza">Pizza</option>
              <option value="salad">Salad</option>
              <option value="burger">Burgers</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          <div className="add-input">
            <p>Price</p>
            <input
              type="number"
              name="price"
              placeholder="Price in USD"
              value={data.price}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>
    </div>
  )
}

export default Add