export const elements ={
    searchSubmit : document.querySelector('.search'),
    searchInput : document.querySelector('.search__field'),
    searchRecipeList : document.querySelector('.results__list'),
    searchResult : document.querySelector('.results')
};

export const renderLoader = parent => {

    const loader = `
        <div class = "loader">
            <svg>
                <use href = "img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML('afterbegin',loader);
};

export const dismissLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader) loader.parentElement.removeChild(loader);
}