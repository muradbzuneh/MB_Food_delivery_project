import { useEffect, useState } from 'react'
import './List.css'
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

  return (
    <div className="food-list">
      <h1> List of Foods</h1>

      <div className="food-grid">
        {foods.map(food => (
          <div className="food-card" key={food._id}>
            <img
              src={`${url}/images/${food.image}`}
              alt={food.name}
            />
            <h2>{food.name}</h2>
            <p className="desc">{food.description}</p>
            <p className="category">Category: {food.category}</p>
            <p className="price">${food.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List