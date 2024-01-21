const searchForm = document.querySelector('form');
const searchInput = document.querySelector ('#search');
const resultsList = document.querySelector ('#results');

searchForm.addEventListener (submit, (e) =>
{e.preventDefault();
    searchRecipes();

})

async function searchRecipes() {
    const searchValue = searchInput.ariaValueMax.trim()
    const response = await fetch('www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    const data = await response.json();
    displayRecipes(data.hits);

}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <div class="images"> <h6>Breakfast</h6>
        <img src="images/brooke-lark-HlNcigvUi4Q-unsplash.jpg" alt="African-meal" srcset=""></div>
    <div class="images">
        <h6>Pancakes</h6><img src="images/chad-montano-eeqbbemH9-c-unsplash.jpg" alt="" srcset=""></div>
   <div class="images"> <h6>Grills</h6> <img src="images/victoria-shes-UC0HZdUitWY-unsplash.jpg" alt="" srcset=""></div>
   <div class="images"> <h6>Pasta</h6><img src="images/brooke-lark--F_5g8EEHYE-unsplash.jpg" alt="" srcset=""></div>`    })

   resultsList.innerHTML = html;
}