import axios from 'axios';

export default class Recipe{
    constructor(id){
        this.id = id;
    }

    async getRecipe(){
        const key = '4d78d05d9f20215c272d04f6974c04db';

        try{
            const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            console.log(res); 
        } catch(error) {
            alert(error);
        }
    }
};