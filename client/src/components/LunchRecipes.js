import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import backgroundImage from "../images/lunch.jpg"

const LunchRecipes = () => {
  const [lunchRecipes,setLunchRecipes] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:8000/api/v1/lunch/recipes')
    .then((res)=>{
      console.log(res)
      setLunchRecipes(res.data.lunchRecipes)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="container" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:'center', height:'100vh',color:'white', fontSize:25}}>
      <div>
        <h1>Lunch Recipes List:</h1>
        <div className="row">
          <Link style={{textDecoration:"none"}} to='/lunch/add'><button className="btn hover">Create Lunch Recipe</button></Link>
          <Link style={{textDecoration:"none"}} to='/'><button className="btn hover">DashBoard</button></Link>
        </div>
      </div>
      <div className="subContainer">
        {
            lunchRecipes.map((item,idx)=>(
              <div className="card-view" onClick={()=>navigate(`/lunch/${item._id}`)} style={{backgroundImage:`url(${item.image})`,backgroundSize:"cover", backgroundPosition:"center", backgroundColor:'gray'}} key={idx}>
                <h4 className="">{item.name}</h4>
              </div>
            ))
        }
      </div>
    </div>

      
    

  )
}

export default LunchRecipes