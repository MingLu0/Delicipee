// Global app controllor

import {elements} from './views/base';
import Search from './models/SearchRecipe';

const state = {};
const searchRecipes = async () =>{
    const query = 'pizza';
    if(query){
        state.search = new Search(query);

        await state.search.getRecipes();

        console.log(state.search.result)
    }
}
elements.searchSubmit.addEventListener('submit',e=>{
e.preventDefault();
searchRecipes();
console.log('hello world');
});