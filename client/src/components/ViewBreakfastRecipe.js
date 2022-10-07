import {useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

const ViewBreakfastRecipe = () => {
  const navigate = useNavigate()
  const [breakfastRecipe,setBreakfastRecipe] = useState({})
  const [state,setState] = useState("")
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/v1/breakfast/recipe/${id}`)
    .then((res)=>{
      console.log(res)
      setBreakfastRecipe(res.data.recipe)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id])

  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/api/v1/breakfast/recipes/${id}`)
    .then((res)=>{
      console.log(res)
      navigate('/breakfast')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <h2>{breakfastRecipe.name}</h2>
            <Link style={{textDecoration:'none'}}to="/breakfast"><button className="btn">All Breakfast Recipes</button></Link>
          </div>
          <div className="view-content" style={{backgroundColor:'gray'}}>
            <div style={{height:300, width:300,backgroundImage:`url(${breakfastRecipe.image})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
            <div style={{display:'flex', flexDirection:'column'}}>
              <h4>Creator: {breakfastRecipe.creator}</h4>
              <h4>Serving Size: {breakfastRecipe.servings}</h4>
              <h4>Cook Time: {breakfastRecipe.cooktime} minutes</h4>
              <h4>Prep Time: {breakfastRecipe.preptime} minutes</h4>
              <h4>Instruction: {breakfastRecipe.instruction}</h4>
              <h4>Description:{breakfastRecipe.description}</h4> 
              <h4>Rating: {breakfastRecipe.rating} / 5 <span style={{color:'yellow'}}>&#9733;</span></h4>
            </div>
          </div>
            <div className="btn-view"style={{textAlign:'center'}}>
              <Link style={{textDecoration:'none'}} to={`/breakfast/edit/${breakfastRecipe._id}`}><button  className="btn hover-warning" >Edit</button></Link>
              <button onClick={handleDelete} className="btn hover hover-danger" >Delete</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBreakfastRecipe