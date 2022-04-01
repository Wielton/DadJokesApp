// Dad Joke App

function getDadJokes(){
    axios.request({
        method : "GET",
        url : 'https://icanhazdadjoke.com/',
        headers : {
            // upon investigation, instead of "Content-type"
            // the header had to be Accept
            Accept : "application/json"
        } 
    })
    //  I forgot to change .then to listJoke instead of postSuccess.
    //  I was receiving a response but from the unintended spot
    .then(listJoke).catch(postFailure);
}
function postSuccess(){
    let res = document.getElementById('jokeDisplay');
    res.innerText = 'Your joke is loading...';
}
function postFailure(error){
    console.log(error);
}
function listJoke(response){
    let dadJoke = response.data.joke;
    console.log(dadJoke);
    document.getElementById('jokeDisplay').innerText = dadJoke;
    
    

    
    
}



/*
// ----  Meal Generator

function getMeal(){
    axios.request({
        method: "GET",
        url : "https://www.themealdb.com/api/json/v1/1/search.php",
        // make the search dynamic:
        params : {
            s : document.getElementById('mealInput').value
        }
    }).then(listIngredients).catch(recipeError);
}

function listIngredients(response){
    console.log(response.data);
    console.log(response.data.meals);
    let myMeal = response.data.meals[0];
    console.log(myMeal);
    document.getElementById('mealContainer').innerText = "";
    let name = myMeal.strMeal;
    console.log(name);
    let firstThreeIng = [myMeal.strIngredient1, myMeal.strIngredient2, myMeal.strIngredient3];
    document.getElementById('mealName').innerText = name;
    
    
    console.log(firstThreeIng);
    for (let i = 0; i < firstThreeIng.length; i++){
        addIngredient(firstThreeIng[i]);
    }
}

function addIngredient(ingredientName){
    let ingr = document.createElement('h5');
    ingr.innerText = ingredientName;
    document.getElementById('mealCOntainer').append(ingr);
}

function recipeError(error){
    console.log(error);
}
*/

document.getElementById('generateJoke').addEventListener('click', getDadJokes);
