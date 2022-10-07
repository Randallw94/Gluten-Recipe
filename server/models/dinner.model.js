const mongoose = require('mongoose');

const DinnerSchema = new mongoose.Schema({
    name: {
        type: String,
        // validations done for name on back-end
        required:[true, "Name of recipe is required "],
        minLength:[3, "Name of recipe must be at least 3 characters long"]
    },
    preptime: {
        type: String,
        // validations done for type on back-end
        required:[true, "Preptime must be provided"],
        minLength:[0, "Prep time of recipe must be longer than 0 minutes"]
    },
    cooktime:{
        type: String,
        // validations done for type on back-end
        required:[true, "Cook time must be provided for this recipe"],
        minLength:[0, "Cook time of recipe must be longer than 0 minutes"]
    },
    servings:{
        type: Number,
        // validations done for type on back-end
        required:[true, "Number of servings is required"],
        min:[0, "Servings must be greater than 0"]
    },
    description: {
        type: String,
        // validations done for description on back-end
        required:[true, "Description of recipe is required "],
        minLength:[3, "Description of recipe must be at least 3 characters long"]
    },
    rating:{
        type:String,
        enum:{
            values:['0','1','2','3','4','5'],
            message:'{VALUE} not supported'
        }
    },
    image:{
        type:String,
        required:[true,"Image is necessary"]
    },
},{timestamps:true})

const Dinner = mongoose.model('Dinner', DinnerSchema);
module.exports = Dinner;