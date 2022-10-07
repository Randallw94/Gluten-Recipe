import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'

import React from 'react'

const EdtBreakfastRecipe = (props) => {

    const {id} = useParams();

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

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/v1/recipes/${id}`)
        .then((res)=>{
            console.log(res.data.recipe)
            setName(res.data.recipe.name)
            setPrepTime(res.data.recipe.preptime)
            setCookTime(res.data.recipe.cooktime)
            setServings(res.data.recipe.servings)
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
          preptime,
          cooktime,
          servings,
          description,
          rating,
          image,
      }

      axios.put(`http://localhost:8000/api/v1/breakfast/recipes/${id}`, breakfastRecipe)
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
    <div className="App">
    <h2 style={{marginTop:0, padding:20, fontSize:35}}>{name}</h2>
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
        <button className="btn hover hover-success" type="submit">Update Recipe</button>
        <button onClick={() => navigate("/breakfast")} className="btn hover hover-danger">Cancel</button></div>
    </form>
    </div>
  </div>
  )
}

export default EdtBreakfastRecipe