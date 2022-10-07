import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

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
    <div>
    <h3>Dinner Recipes</h3>
    <div style={{display:"flex", justifyContent:"center"}}>
      <button className = "btn hover" onClick={()=>navigate('/dinner/add')}>Create Dinner Recipe</button>
      <button className = "btn hover" onClick={()=>navigate('/')}>Dashboard</button>
    </div>
    
    <div className="container">
      {
          dinnerRecipes.map((item,idx)=>(
            <div onClick={()=>navigate(`/dinner/${item._id}`)} style={{backgroundImage:`url(${item.image})`,backgroundSize:"cover", backgroundPosition:"center"}} className="card hover" key={idx}>
              <h4 className="recipe-title">{item.name}</h4>
              </div>
          ))
      }
    </div>

      
    
</div>
  )
}

export default DinnerRecipes