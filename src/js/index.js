// Global app controllor

import {elements} from './views/base';
import Search from './models/SearchRecipe';
import * as searchView from './views/searchView';


const state = {};
const searchRecipes = async () =>{
    const query = searchView.getInput();
    console.log(query);
    if(query){
        state.search = new Search(query);
        searchView.clearInput();
        searchView.clearResults();
        await state.search.getRecipes();
        searchView.renderRecipes(state.search.result);
        console.log(state.search.result)
    }
}
elements.searchSubmit.addEventListener('submit',e=>{
e.preventDefault();
searchRecipes();

});