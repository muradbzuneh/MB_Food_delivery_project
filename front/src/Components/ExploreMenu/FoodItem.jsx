import {useContext, useState, React} from 'react'
import './FoodDisplay.css'
import './FoodItem.css'
import { assets} from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'

export const FoodItem = ( {id, img, description, price, name} ) => {
  const [showAdded, setShowAdded] = useState(false);
  const {cartItems, AddtoCart, removeFromCart} = useContext (StoreContext);

 
 const handleAdd = () => {

  setShowAdded(true);

  setTimeout(() => {
    setShowAdded(false);
  }, 3000);
}

  return (
         <div className="food-items">
               <div  className="Food-grid">
                 <div className="food-img">
                   <img src={img} alt="" />  
                 </div>
                    {!cartItems[id]?
                      <img className ="counter"src={assets.add_icon_white} onClick={() => AddtoCart(id)} alt="Add to cart" />
                    : <div className="food-item-count">
                     <img className='counter' src={assets.remove_icon_red} onClick={() => removeFromCart(id)}  />
                      <p>{cartItems[id]}</p>
                     <img className = "counter"src={assets.add_icon_green} alt="" onClick={()=>{AddtoCart(id)}} />
                    </div>
                    }
                 <div className="descriptions">
                   <h3 className='food-name'>{name}</h3>
                 </div>
                 <div className="descriotion">
                   <p>{description}</p>
                 </div>
                 <div className="price">
                   <h3 >${price}</h3>
                 </div>
                 <div className="buttton">
                <button className = "btn" onClick={()=>{handleAdd()} }>Add to cart</button>
                {showAdded && <h3 className='add-dispaly' style={{ color: "green" }}>{`Added !`}</h3>}

                 </div>
               </div>
          </div>
  )
}

