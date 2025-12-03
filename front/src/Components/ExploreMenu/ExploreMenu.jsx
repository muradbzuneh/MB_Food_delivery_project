import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import './ExploreMenu.css'
const ExploreMenu = ({category, setCategory}) => {

  const {menu_list} = useContext(StoreContext);

    function handleClick(categoryy){
    if(category !== categoryy){
      setCategory (categoryy);
    }
  else{
    setCategory ("All")
  }
}
  return (
    <div className='Container' id='menuu'>
      <div className="text">
        <h1>Explore our menu</h1>
        <p>Explore, choose, and enjoy your favorite dishes effortlessly.</p>
      </div>
      <div className="food-list"> 
       {menu_list.map((item, key) =>{
        return (
          <div key={key} className="menu" onClick={() =>handleClick(item.menu_name)} >
           <img src={item.menu_image} className = {category === item.menu_name?"Food-active":""} /> 
            <p>{item.menu_name}</p>
          </div>
        )
       })}
      </div>
      <hr className='horizontal' />
    </div>
  )
}

export default ExploreMenu
