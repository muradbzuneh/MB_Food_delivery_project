import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import {  FoodItem } from './FoodItem.jsx'
import { useContext} from "react";
const FoodDisplay = ({category}) => {
const { foodList } = useContext(StoreContext);

return ( 
  <>
    <div className="food-items" id= "Food">
      <h1>Top dishes Near you</h1>
      <div className="food-grid-display">
        {foodList  
          .filter((item) => 
            category === "All" || item.category === category
          )
          .map((item, id) => (
            <div key={id} className="food-item-list">
              <FoodItem 
                id={item._id}
                img={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </div>
          ))
        }
      </div>
    </div>
  </>
);
}


export default FoodDisplay
