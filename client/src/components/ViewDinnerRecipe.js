import {useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

const ViewDinnerRecipe = () => {
  const navigate = useNavigate()
  const [dinnerRecipe,setDinnerRecipe] = useState({})
  const [state,setState] = useState("")
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/v1/dinner/recipe/${id}`)
    .then((res)=>{
      console.log(res)
      setDinnerRecipe(res.data.recipe)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id])

  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/api/v1/dinner/recipes/${id}`)
    .then((res)=>{
      console.log(res)
      navigate('/dinner')
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
          <h2>{dinnerRecipe.name}</h2>
          <Link style={{textDecoration:'none'}}to="/dinner"><button className="btn">Dinner Recipes</button></Link>
        </div>
        <div className="view-content" style={{backgroundColor:'gray'}}>
          <div style={{height:300, width:300,backgroundImage:`url(${dinnerRecipe.image})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
          <div style={{display:'flex', flexDirection:'column'}}>
            <h4>Creator: {dinnerRecipe.creator}</h4>
            <h4>Serving Size: {dinnerRecipe.serving}</h4>
            <h4>Cook Time: {dinnerRecipe.cooktime} minutes</h4>
            <h4>Prep Time: {dinnerRecipe.preptime} minutes</h4>
            <h4>Instruction: {dinnerRecipe.instruction}</h4>
            <h4>Description:{dinnerRecipe.description}</h4> 
            <h4>Rating: {dinnerRecipe.rating} / 5 <span style={{color:'yellow'}}>&#9733;</span></h4>
          </div>
        </div>
          <div className="btn-view"style={{textAlign:'center'}}>
            <Link style={{textDecoration:'none'}} to={`/dinner/edit/${dinnerRecipe._id}`}><button  className="btn hover-warning" >Edit</button></Link>
            <button onClick={handleDelete} className="btn hover hover-danger" >Delete</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default ViewDinnerRecipe