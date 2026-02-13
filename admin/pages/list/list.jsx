import { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios'

const url = 'http://localhost:3000'

const List = () => {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchFoods = async () => {
      try {
        const res = await axios.get(`${url}/api/foods/all`)
        if (isMounted) {
          setFoods(res.data)
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching foods:', err)
          setError('Failed to load foods')
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchFoods()

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return <h2 className="loading">Loading foods...</h2>
  }

  if (error) {
    return <h2 className="loading">{error}</h2>
  }

  if (foods.length === 0) {
    return <h2 className="loading">No foods found </h2>
  }
const handleDelete = async (id) => {
  try {
    await axios.delete(`${url}/api/foods/delete/${id}`)
    setFoods(prevFoods => prevFoods.filter(food => food._id !== id))
  } catch (err) {
    console.error('Error deleting food:', err)
    alert('Failed to delete food')
  }
}
  return (
    <div className="food-list">
      <h1> List of Foods</h1>

      <div className="food-list-table">
      <div className="food-card header"> 
        <b>Image</b>
        <b>Name</b>
        <b>category</b>
        <b>price</b>
        <b>Action</b>
      </div>
      {foods.map(food => (
  <div className="food-card" key={food._id}>
    <img
      src={`${url}/images/${food.image}`}
      alt={food.name}
    />
    <p>{food.name}</p>
    <p className="category">{food.category}</p>
    <p className="price">${food.price}</p>
    <button onClick={() => handleDelete(food._id)} className="delete-btn">Delete</button>
  </div>
))}
      </div>
    </div>
  )
}

export default List