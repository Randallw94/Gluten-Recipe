import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const AddDinnerRecipe = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [preptime, setPrepTime] = useState("");
    const [cooktime, setCookTime] = useState("");
    const [servings, setServings] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState({});

    const ratings = ["0", "1", "2", "3", "4", "5"];

    const handleName = (e) => {
        setErrors("");
        setName(e.target.value);
    };

    const handlePrepTime = (e) => {
        setErrors("");
        setPrepTime(e.target.value);
    };

    const handleCookTime = (e) => {
        setErrors("");
        setCookTime(e.target.value);
    };

    const handleServings = (e) => {
        setErrors("");
        setServings(e.target.value);
    };

    const handleDescription = (e) => {
        setErrors("");
        setDescription(e.target.value);
    };

    const handleRating = (e) => {
        setErrors("");
        setRating(e.target.value);
    };

    const handleImage = (e) => {
        setErrors("");
        setImage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dinnerRecipes = {
            name,
            preptime,
            cooktime,
            servings,
            description,
            rating,
            image,
        };

        axios
            .post("http://localhost:8000/api/v1/add/dinner/recipes", dinnerRecipes)
            .then((recipe) => {
                console.log(recipe);
                navigate("/dinner");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err);
            });
    };
  return (
    <div>
            <h2>Add Dinner Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Recipe Name:</label>
                </div>
                <div>
                    {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
                    <input
                        className="form-control"
                        onChange={handleName}
                        type="text"
                        value={name}
                    />
                </div>
                <div>
                    {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
                    <label htmlFor="">Prep Time:</label>
                    <input
                        className="form-control"
                        onChange={handlePrepTime}
                        type="text"
                        value={preptime}
                    />
                </div>
                <div>
                    {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
                    <label htmlFor="">Cook Time:</label>
                    <input
                        className="form-control"
                        onChange={handleCookTime}
                        type="text"
                        value={cooktime}
                    />
                </div>
                <div>
                    {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
                    <label htmlFor="">Servings:</label>
                    <input
                        className="form-control"
                        onChange={handleServings}
                        type="number"
                        value={servings}
                    />
                </div>
                <div>
                    {/* {errors.title ? <p>{errors.title.message}</p>:null} */}
                    <label htmlFor="">Description:</label>
                    <input
                        className="form-control"
                        onChange={handleDescription}
                        type="text"
                        value={description}
                    />
                </div>
                <div>
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
                <div>
                    {/* {errors.boxArt ? <p>{errors.boxArt.message}</p>:null} */}
                    <label htmlFor="">Image:</label>
                    <input
                        className="form-control"
                        onChange={handleImage}
                        type="text"
                        value={image}
                    />
                </div>
                <div className="row">
                    <button className="btn hover hover-success" type="submit">
                        Add Recipe
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="btn hover hover-danger"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
  )
}

export default AddDinnerRecipe