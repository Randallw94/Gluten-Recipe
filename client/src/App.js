import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DashBoard from './components/DashBoard';

import BreakFastRecipes from './components/BreakFastRecipes';
import AddBreakfastRecipes from './components/AddBreakfastRecipes';
import ViewBreakfastRecipe from './components/ViewBreakfastRecipe';

import LunchRecipes from './components/LunchRecipes';
import AddLunchRecipes from './components/AddLunchRecipes';
import ViewLunchRecipes from './components/ViewLunchRecipe';

import DinnerRecipes from './components/DinnerRecipes';
import AddDinnerRecipe from './components/AddDinnerRecipe';
import ViewDinnerRecipes from './components/ViewDinnerRecipe';

import EditBreakfastRecipe from './components/EditBreakfastRecipe';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard/>} />

          {/* Breakfast */}
          <Route path='/breakfast' element={<BreakFastRecipes/>} />
          <Route path='/breakfast/:id' element={<ViewBreakfastRecipe/>}/>
          <Route path='/breakfast/add' element={<AddBreakfastRecipes/>}/>
          <Route path='breakfast/edit/:id' element={<EditBreakfastRecipe/>}/>

          {/* Lunch */}
          <Route path='/lunch' element={<LunchRecipes/>} />
          <Route path='/lunch/:id' element={<ViewLunchRecipes/>}/>
          <Route path='/lunch/add' element={<AddLunchRecipes/>}/>
          
          {/* Dinner */}
          <Route path='/dinner' element={<DinnerRecipes/>} />
          <Route path='/dinner/:id' element={<ViewDinnerRecipes/>}/>
          <Route path='/dinner/add' element={<AddDinnerRecipe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
