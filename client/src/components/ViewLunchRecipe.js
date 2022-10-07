import {useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

const ViewLunchRecipe = () => {
  const navigate = useNavigate()
  const [lunchRecipe,setLunchRecipe] = useState({})
  const [state,setState] = useState("")
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/v1/recipes/${id}`)
    .then((res)=>{
      console.log(res)
      setLunchRecipe(res.data)
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
        <Link to="/breakfast"><button className="btn hover">All Breakfast Recipes</button></Link>
        <div style={{height:200, width:200, borderRadius:100,backgroundImage:`url(${lunchRecipe.image})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
        <div>
          <p>{lunchRecipe.name}</p>
          <p>Serving Size: {lunchRecipe.servings}</p>
          <p>Cook Time: {lunchRecipe.cooktime}</p>
          <p>Prep Time: {lunchRecipe.preptime}</p>
          <p>Description: {lunchRecipe.description}</p>
          <p>Rating: {lunchRecipe.rating} / 5</p>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <button onClick={handleDelete} className="" >Delete</button>
          <Link to={`/recipes/${lunchRecipe._id}/edit`}><button  className="" >Edit</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ViewLunchRecipe