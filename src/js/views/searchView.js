import {elements} from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () =>{
    elements.searchRecipeList.innerHTML = '';
}

export const limitTitleLength = (title, limit=17) =>{

    if(title.length>limit){
        const newTitle = [];
        title.split(' ').reduce((acc,curr)=>{
            if(acc+curr.length<=limit){
                newTitle.push(curr);
            }
            return acc+curr.length;
    
        },0)

        return `${newTitle.join(' ')}...`
    }
    return title;
    
}

const renderRecipe = recipe => {

    const markup = `
    <li>
                    <a class="results__link " href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitTitleLength(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
    `;

    elements.searchRecipeList.insertAdjacentHTML('beforeend',markup);
    console.log(`searchView ${recipe}`);

};

export const renderRecipes = recipes => {
    
    recipes.forEach(renderRecipe);
};
