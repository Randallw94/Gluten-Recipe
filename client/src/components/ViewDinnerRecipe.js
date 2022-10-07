import {useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

const ViewDinnerRecipe = () => {
  const navigate = useNavigate()
  const [dinnerRecipe,setDinnerRecipe] = useState({})
  const [state,setState] = useState("")
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/v1/recipes/${id}`)
    .then((res)=>{
      console.log(res)
      setDinnerRecipe(res.data)
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
        <Link to="/breakfast"><button className="btn hover">All Breakfast Recipes</button></Link>
        <div style={{height:200, width:200, borderRadius:100,backgroundImage:`url(${dinnerRecipe.image})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
        <div>
          <p>{dinnerRecipe.name}</p>
          <p>Serving Size: {dinnerRecipe.servings}</p>
          <p>Cook Time: {dinnerRecipe.cooktime}</p>
          <p>Prep Time: {dinnerRecipe.preptime}</p>
          <p>Description: {dinnerRecipe.description}</p>
          <p>Rating: {dinnerRecipe.rating} / 5</p>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <button onClick={handleDelete} className="" >Delete</button>
          <Link to={`/recipes/${dinnerRecipe._id}/edit`}><button  className="" >Edit</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ViewDinnerRecipe