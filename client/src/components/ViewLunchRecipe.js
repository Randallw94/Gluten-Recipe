import {useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

const ViewLunchRecipe = () => {
  const navigate = useNavigate()
  const [lunchRecipe,setLunchRecipe] = useState({})
  const [state,setState] = useState("")
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/v1/lunch/recipe/${id}`)
    .then((res)=>{
      console.log(res)
      setLunchRecipe(res.data.recipe)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id])

  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/api/v1/lunch/recipes/${id}`)
    .then((res)=>{
      console.log(res)
      navigate('/lunch')
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
            <h2>{lunchRecipe.name}</h2>
            <Link style={{textDecoration:'none'}}to="/lunch"><button className="btn">All Lunch Recipes</button></Link>
          </div>
          <div className="view-content" style={{backgroundColor:'gray'}}>
            <div style={{height:300, width:300,backgroundImage:`url(${lunchRecipe.image})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
            <div style={{display:'flex', flexDirection:'column'}}>
              <h4>Creator: {lunchRecipe.creator}</h4>
              <h4>Serving Size: {lunchRecipe.servings}</h4>
              <h4>Cook Time: {lunchRecipe.cooktime} minutes</h4>
              <h4>Prep Time: {lunchRecipe.preptime} minutes</h4>
              <h4>Instruction: {lunchRecipe.instruction}</h4>
              <h4>Description:{lunchRecipe.description}</h4> 
              <h4>Rating: {lunchRecipe.rating} / 5 <span style={{color:'yellow'}}>&#9733;</span></h4>
            </div>
          </div>
            <div className="btn-view"style={{textAlign:'center'}}>
              <Link style={{textDecoration:'none'}} to={`/lunch/edit/${lunchRecipe._id}`}><button  className="btn hover-warning" >Edit</button></Link>
              <button onClick={handleDelete} className="btn hover hover-danger" >Delete</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewLunchRecipe