// Global app controllor

import {elements,renderLoader,dismissLoader} from './views/base';
import Search from './models/SearchRecipe';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import SearchRecipe from './models/SearchRecipe';


const state = {};
const searchRecipes = async () =>{
    const query = searchView.getInput();
    console.log(query);
    if(query){
        state.search = new SearchRecipe(query);
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResult);
        await state.search.getRecipes();
        dismissLoader();
        searchView.renderRecipes(state.search.result);
        console.log(state.search.result)
    }
}
elements.searchSubmit.addEventListener('submit',e=>{
e.preventDefault();
//searchRecipes();

});

const r = new Recipe('35929');
r.getRecipe();