const mongoose = require('mongoose');

const BreakfastSchema = new mongoose.Schema({
    name: {
        type: String,
        // validations done for name on back-end
        required:[true, "Name of recipe is required: "],
        minLength:[3, "Name of recipe must be at least 3 characters long"]
    },
    creator:{
        type: String,
        required:[true, "Creator must be provided: "],
        minLength:[3, "Creator name of the recipe must be longer than 3 characters"]

    },
    preptime: {
        type: String,
        // validations done for type on back-end
        required:[true, "Prep time must be provided: "],
        minLength:[0, "Prep time of recipe must be longer than 0 minutes"]
    },
    cooktime:{
        type: String,
        // validations done for type on back-end
        required:[true, "Cook time must be provided for this recipe:"],
        minLength:[0, "Cook time of recipe must be longer than 0 minutes"]
    },
    serving:{
        type: Number,
        // validations done for type on back-end
        required:[true, "Number of servings are required: "],
        min:[0, "Servings must be greater than 0"]
    },
    instruction: {
        type: String,
        // validations done for description on back-end
        required:[true, "Recipe instructions are required: "],
        minLength:[3, "Instruction of recipe must be at least 3 characters long"]
    },
    description: {
        type: String,
        // validations done for description on back-end
        required:[true, "Description of recipe is required: "],
        minLength:[3, "Description of recipe must be at least 3 characters long"]
    },
    rating:{
        type:Number,
        enum:{
            values:[0,1,2,3,4,5],
            message:'{VALUE} not supported'
        },
        required:[true, "Recipe rating is required: "],
    },
    image:{
        type:String
    },
},{timestamps:true})

const Breakfast = mongoose.model('Breakfast', BreakfastSchema);
module.exports = Breakfast;