// Sample recipe data
const recipes = [
    {
        name: 'The Food Sermon Kitchen',
        image: 'img2/recipe1.png',
        rating: 4.2,
        reviews: 23
    },
    {
        name: 'The Food Sermon Kitchen',
        image: 'img2/recipe2.png',
        rating: 4.5,
        reviews: 18
    },
    // Add more recipe objects as needed
];

// Function to create recipe card elements
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    const image = document.createElement('div');
    image.classList.add('recipe-img');
    const img = document.createElement('img');
    img.src = recipe.image;
    image.appendChild(img);

    const details = document.createElement('div');
    details.classList.add('recipe-details');

    const name = document.createElement('h3');
    name.textContent = recipe.name;

    const rating = document.createElement('div');
    rating.classList.add('recipe-rating');
    const stars = Math.floor(recipe.rating);
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.classList.add('bx');
        star.classList.add(i < stars ? 'bxs-star' : 'bx-star');
        rating.appendChild(star);
    }

    const reviews = document.createElement('p');
    reviews.classList.add('recipe-reviews');
    reviews.textContent = `${recipe.reviews} Reviews`;

    const viewButton = document.createElement('button');
    viewButton.classList.add('btn');
    viewButton.textContent = 'View Menu';

    details.appendChild(name);
    details.appendChild(rating);
    details.appendChild(reviews);
    details.appendChild(viewButton);

    card.appendChild(image);
    card.appendChild(details);

    return card;
}

// Function to render recipe cards
function renderRecipeCards() {
    const recipesContainer = document.querySelector('.recipes-container');

    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipesContainer.appendChild(recipeCard);
    });
}

// Call the renderRecipeCards function to display the recipe cards
renderRecipeCards();