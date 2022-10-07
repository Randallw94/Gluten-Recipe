const BreakfastRecipeController = require("../controllers/breakfastRecipe.controller");
const LunchRecipeController = require("../controllers/lunchRecipe.controller");
const DinnerRecipeController = require("../controllers/dinnerRecipe.controller");

const routes =(app) =>{

    //test
    app.get('/api/v1/breakfast/test',BreakfastRecipeController.test)
    app.get('/api/v1/lunch/test',LunchRecipeController.test)
    app.get('/api/v1/dinner/test',DinnerRecipeController.test)

    // Read
    // find all recipes
    app.get('/api/v1/breakfast/recipes', BreakfastRecipeController.getAll)
    app.get('/api/v1/lunch/recipes', LunchRecipeController.getAll)
    app.get('/api/v1/dinner/recipes', DinnerRecipeController.getAll)

    // find one recipe by id
    app.get("/api/v1/recipes/:id", BreakfastRecipeController.getOne);
    app.get("/api/v1/recipes/:id", LunchRecipeController.getOne);
    app.get("/api/v1/recipes/:id", DinnerRecipeController.getOne);

    // create
    // create a recipe pet
    app.post('/api/v1/add/breakfast/recipes', BreakfastRecipeController.createOne)
    app.post('/api/v1/add/lunch/recipes', LunchRecipeController.createOne)
    app.post('/api/v1/add/dinner/recipes', DinnerRecipeController.createOne)

    //update a recipe by id
    app.put('/api/v1/breakfast/recipes/:id', BreakfastRecipeController.updateOne)
    app.put('/api/v1/lunch/recipes/:id', LunchRecipeController.updateOne)
    app.put('/api/v1/dinner/recipes/:id', DinnerRecipeController.updateOne)

    //delete a recipe by id
    app.delete('/api/v1/breakfast/recipes/:id', BreakfastRecipeController.deleteOne)
    app.delete('/api/v1/lunch/recipes/:id', LunchRecipeController.deleteOne)
    app.delete('/api/v1/dinner/recipes/:id', DinnerRecipeController.deleteOne)

}

module.exports = routes;