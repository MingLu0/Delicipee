// Global app controllor

import {elements} from './views/base';


elements.searchSubmit.addEventListener('submit',e=>{
e.preventDefault();

console.log(elements.searchInput.value);
});