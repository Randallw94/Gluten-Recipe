import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'

const EditLunchRecipe = () => {
    const {id} = useParams();

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [creator, setCreator] = useState("");
    const [preptime, setPrepTime] = useState("");
    const [cooktime, setCookTime] = useState("");
    const [serving, setServing] = useState("");
    const [instruction, setInstruction] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const [errors,setErrors] = useState({})

    const ratings =[0,1,2,3,4,5]

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/v1/lunch/recipe/${id}`)
        .then((res)=>{
            console.log(res.data)
            setName(res.data.recipe.name)
            setCreator(res.data.recipe.creator)
            setPrepTime(res.data.recipe.preptime)
            setCookTime(res.data.recipe.cooktime)
            setServing(res.data.recipe.serving)
            setInstruction(res.data.recipe.instruction)
            setDescription(res.data.recipe.description)
            setRating(res.data.recipe.rating)
        })
        .catch((err)=>{
          console.log(err)
        })
      },[id])

    const handleName = (e)=>{
      setErrors("")
      setName(e.target.value)
    }
    const handleCreator = (e)=>{
      setErrors("")
      setCreator(e.target.value)
    }

    const handlePrepTime = (e)=>{
      setErrors("")
      setPrepTime(e.target.value)
    }

    const handleCookTime = (e)=>{
      setErrors("")
      setCookTime(e.target.value)
    }

    const handleServings = (e)=>{
      setErrors("")
      setServing(e.target.value)
    }

    const handleInstruction = (e)=>{
      setErrors("")
      setInstruction(e.target.value)
    }
    const handleDescription = (e)=>{
      setErrors("")
      setDescription(e.target.value)
    }

    const handleRating = (e)=>{
      setErrors("")
      setRating(e.target.value)
    }
// test
    //test

    const handleImage = (e)=>{
      setErrors("")
      setImage(e.target.value)
    }

    const handleSubmit= (e)=>{
      e.preventDefault()

      const breakfastRecipe = {
          name,
          creator,
          preptime,
          cooktime,
          serving,
          instruction,
          description,
          rating,
          image,
      }

      axios.put(`http://localhost:8000/api/v1/lunch/recipes/${id}`, breakfastRecipe)
      .then((recipe)=>{
          console.log(recipe)
          navigate("/breakfast")
      })
      .catch((err)=>{
          console.log(err)
          setErrors(err)
      })
  }
  return (
    <div style={{backgroundColor:""}}>
    <h2 style={{marginTop:0, padding:20, fontSize:35}}>Edit Recipe</h2>
    {/* <img style={{borderRadius:50,height:200, width:350}} alt="" /> */}
    <div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Recipe Name:</label>
          <input className="form-control" onChange={handleName} type="text" value={name}  />
      </div>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Creator Name:</label>
          <input className="form-control" onChange={handleCreator} type="text" value={creator}  />
      </div>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Prep Time:</label>
          <input className="form-control" onChange={handlePrepTime} type="text" value={preptime}  />
      </div>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Cook Time:</label>
          <input className="form-control" onChange={handleCookTime} type="text" value={cooktime}/>
      </div>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Servings:</label>
          <input className="form-control" onChange={handleServings} type="text" value={serving}/>
      </div>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Instrunctions:</label>
          <textarea className="form-control" onChange={handleInstruction} style={{height:100,width:300}} value={instruction}/>
      </div>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Description:</label>
          <input className="form-control" onChange={handleDescription} value={description}/>
      </div>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Rating:</label>
          <select className="form-control" onChange={handleRating}>
                      <option></option>
                      {ratings.map((item, index) => (
                          <option key={index} value={item}>
                              {item}
                          </option>
                      ))}
                  </select>
      </div>
      <div className="form-group">
          {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
          <label htmlFor="">Image:</label>
          <input className="form-control" type ="text" onChange={handleImage} value={image}/>
      </div>
      <div className="row">
        <button className="btn hover hover-success" type="submit">Update Recipe</button>
        <button onClick={() => navigate("/lunch")} className="btn hover hover-danger">Cancel</button></div>
    </form>
    </div>
  </div>
)}

export default EditLunchRecipe