import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../images/breakfast.jpg"

const BreakFastRecipes = () => {
  const [breakFastRecipes, setBreakfastRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/breakfast/recipes")
      .then((res) => {
        console.log(res)
        setBreakfastRecipes(res.data.breakfastRecipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:'center'}}>
      <div style={{color:'white', fontSize:25}}>
        <h1>Breakfast Recipes List:</h1>
        <div className="row">
          <Link style={{textDecoration:"none"}} to='/breakfast/add'><button className="btn hover">Create Breakfast Recipe</button></Link>
          <Link style={{textDecoration:"none"}} to='/'><button className="btn hover">DashBoard</button></Link>
        </div>
      </div>
      <div className="subContainer">
        {
            breakFastRecipes.map((item,idx)=>(
              <div className="card-view" onClick={()=>navigate(`/breakfast/${item._id}`)} style={{backgroundImage:`url(${item.image})`,backgroundSize:"cover", backgroundPosition:"center", backgroundColor:'gray'}} key={idx}>
                <h4 className="">{item.name}</h4>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default BreakFastRecipes;
