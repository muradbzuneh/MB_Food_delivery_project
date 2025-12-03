import{ useState, React} from 'react'

import Header from '../../Components/header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/ExploreMenu/FoodDisplay'
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/Footer/footer'

const HomePage = () => {
 const [category, setCategory] = useState("All")
  
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu category= {category} setCategory ={setCategory}/>
      <FoodDisplay  category ={category}  />
      <Footer />
    </div>
  )
}

export default HomePage
