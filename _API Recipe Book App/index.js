const API_KEY = '6fdf8b3b8fc84b78b5a31188dff273aa';

const recipeList = document.getElementById('recipe-list');

function displayRecipes(recipes){
    recipeList.innerHTML = '';

    recipes.forEach((recipe) => {
        const recipeItem = document.createElement('li');
        recipeItem.classList.add('recipe-item');

        recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = 'recipe image';

        recipeTitle = document.createElement('h2');
        recipeTitle.innerText = recipe.title;

        recipeIngredients = document.createElement('p');
        recipeIngredients.innerHTML = `
            <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(', ')};
        `

        recipeLink = document.createElement('a');
        recipeLink.href = recipe.sourceUrl;
        recipeLink.innerText = 'View Recipe';

        recipeItem.appendChild(recipeImage);
        recipeItem.appendChild(recipeTitle);
        recipeItem.appendChild(recipeIngredients);
        recipeItem.appendChild(recipeLink);

        recipeList.appendChild(recipeItem);
    });
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();

    return data.recipes;
}

async function init(){
    const recipes = await getRecipes();

    displayRecipes(recipes);
}

init();