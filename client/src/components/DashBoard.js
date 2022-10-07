import React from 'react'
import { Link} from 'react-router-dom'
import backgroundImage from '../images/background.jpg'
import Footer from '../views/Footer'

const DashBoard = () => {
  return (
    <div className="container" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize:"cover", color:"white"}}>
        <h1 style={{fontSize:55, marginTop:0}}>Welcome to Gluten Free Recipes</h1>
        <div className="subContainer">
          <div className="category-box">
            <Link to="/breakfast"><img className="dashboard-image" src="https://mamashire.com/wp-content/uploads/Gluten-Free-Dairy-Free-Breakfast-Casserole-SQ-1.jpg" alt="Breakfast" /></Link>
            <h2>Breakfast</h2>
          </div>
          <div className="category-box">
            <Link to="/lunch"><img className="dashboard-image" src="https://assets.bonappetit.com/photos/6018560126af00c353671c6e/master/pass/Lunch-Nachos-With-Spiced-Cauliflower.jpg" alt="Lunch" /></Link>
            <h2>Lunch</h2>
          </div>
          <div className="category-box">
            <Link to="/dinner"><img className="dashboard-image" src="https://www.acouplecooks.com/wp-content/uploads/2021/05/Gluten-Free-Dairy-Free-Recipes-1.jpg" alt="Dinner" /></Link>
            <h2>Dinner</h2>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
};

export default DashBoard