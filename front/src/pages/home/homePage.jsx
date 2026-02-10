import{ useState, React, useEffect} from 'react'
import  {getAuth} from "firebase/auth"
import Header from '../../Components/header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/ExploreMenu/FoodDisplay'
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/Footer/footer'

const HomePage = () => {
 const [category, setCategory] = useState("All")
 useEffect(() => {
  const auth = getAuth();

  if (auth.currentUser) {
    auth.currentUser.getIdToken().then((token) => {
      console.log("🔥 Firebase Token:", token);
    });
  }
}, []);
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
