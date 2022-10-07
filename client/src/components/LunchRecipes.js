import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

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
    <div>
      <h3>Lunch Recipes</h3>
      <div style={{display:"flex", justifyContent:"center"}}>
        <button className = "btn hover" onClick={()=>navigate('/lunch/add')}>Create Lunch Recipe</button>
        <button className = "btn hover" onClick={()=>navigate('/')}>Dashboard</button>
      </div>
    
    <div className="container">
      {
          lunchRecipes.map((item,idx)=>(
            <div onClick={()=>navigate(`/lunch/${item._id}`)} style={{backgroundImage:`url(${item.image})`,backgroundSize:"cover", backgroundPosition:"center"}} className="card hover" key={idx}>
              <h4 className="recipe-title">{item.name}</h4>
              </div>
          ))
      }
    </div>

      
    
</div>
  )
}

export default LunchRecipes