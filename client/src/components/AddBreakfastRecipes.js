import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import recipe from '../images/recipe.jpg'

const AddBreakfastRecipes = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [preptime, setPrepTime] = useState("");
    const [cooktime, setCookTime] = useState("");
    const [servings, setServings] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const [errors,setErrors] = useState({})

    const ratings =[0,1,2,3,4,5]

    const handleName = (e)=>{
      setErrors("")
      setName(e.target.value)
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
      setServings(e.target.value)
    }

    const handleDescription = (e)=>{
      setErrors("")
      setDescription(e.target.value)
    }

    const handleRating = (e)=>{
      setErrors("")
      setRating(e.target.value)
    }

    const handleImage = (e)=>{
      setErrors("")
      setImage(e.target.value)
    }

    const handleSubmit= (e)=>{
      e.preventDefault()

      const breakfastRecipes = {
          name,
          preptime,
          cooktime,
          servings,
          description,
          rating,
          image,
      }

      axios.post("http://localhost:8000/api/v1/add/breakfast/recipes", breakfastRecipes)
      .then((breafast)=>{
          console.log(breafast)
          navigate("/breakfast")
      })
      .catch((err)=>{
          console.log(err)
          setErrors(err)
      })
  }

  return (
    <div className="App">
      <h2 style={{marginTop:0, padding:20, fontSize:35}}>Add Breakfast Recipe</h2>
      <img style={{borderRadius:50,height:250, width:350}}src="https://slideplayer.com/5833249/19/images/slide_1.jpg" alt="" />
      <div>
      <form onSubmit={handleSubmit}>
        <div>
            {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
            <label htmlFor="">Recipe Name:</label>
        </div>
        <div>
            <input className="form-control" onChange={handleName} type="text" value={name}  />
        </div>
        <div>
            {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
            <label htmlFor="">Prep Time:</label>
        </div>
        <div>
            <input className="form-control" onChange={handlePrepTime} type="text" value={preptime}  />
        </div>
        <div>
            {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
            <label htmlFor="">Cook Time:</label>
        </div>
        <div>
            <input className="form-control" onChange={handleCookTime} type="text" value={cooktime}/>
        </div>
        <div>
            {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
            <label htmlFor="">Servings:</label>
        </div>
        <div>
            <input className="form-control" onChange={handleServings} type="text" value={servings}/>
        </div>
        <div>
            {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
            <label htmlFor="">Description:</label>
        </div>
        <div>
            <textarea className="form-control" onChange={handleDescription} rows="5" cols="100" value={description}/>
        </div>
        <div>
            {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
            <label htmlFor="">Rating:</label>
        </div>
        <div>
            <input className="form-control" onChange={handleRating} type="number" min={0} max={5} value={rating}/>
        </div>
        <div>
            {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
            <label htmlFor="">Image:</label>
        </div>
        <div>
            <input className="form-control" type ="text" onChange={handleImage} value={image}/>
        </div>
        <div className="row">
          <button className="btn hover hover-success" type="submit">Add Recipe</button>
          <button onClick={() => navigate("/breakfast")} className="btn hover hover-danger">Cancel</button></div>
      </form>
      </div>
    </div>
  )
}

export default AddBreakfastRecipes