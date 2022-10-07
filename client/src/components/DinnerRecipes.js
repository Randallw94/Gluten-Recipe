import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import backgroundImage from "../images/dinner.jpg"

const DinnerRecipes = () => {
  const [dinnerRecipes,setDinnerRecipes] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:8000/api/v1/dinner/recipes')
    .then((res)=>{
      console.log(res)
      setDinnerRecipes(res.data.dinnerRecipes)
    })
    .catch((err)=>{
      console.log(err)
    })
},[])
  return (
    <div className="container" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:'center', height:'100vh',color:'black', fontSize:25}}>
    <div>
      <h1>Dinner Recipes List:</h1>
      <div className="row">
        <Link style={{textDecoration:"none"}} to='/dinner/add'><button className="btn hover">Create Dinner Recipe</button></Link>
        <Link style={{textDecoration:"none"}} to='/'><button className="btn hover">DashBoard</button></Link>
      </div>
    </div>
    <div className="subContainer">
      {
          dinnerRecipes.map((item,idx)=>(
            <div className="card-view" onClick={()=>navigate(`/dinner/${item._id}`)} style={{backgroundImage:`url(${item.image})`,backgroundSize:"cover", backgroundPosition:"center", backgroundColor:'gray'}} key={idx}>
              <h4 className="">{item.name}</h4>
            </div>
          ))
      }
    </div>
  </div>
  )
}

export default DinnerRecipes