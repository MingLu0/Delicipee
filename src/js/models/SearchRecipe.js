import axios from 'axios';

export default class SearchRecipe{

    constructor(query){
        this.query = query;
    }

    async getRecipes(){
        const key = '4d78d05d9f20215c272d04f6974c04db';
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        }catch(error){
            alert(error);
        }
    }
    
}