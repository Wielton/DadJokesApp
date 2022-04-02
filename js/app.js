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
// Make sure you page tells the user when the API is loading, or if it ever errors.
function listJoke(response){
    let dadJoke = response.data.joke;
    console.log(dadJoke);
    document.getElementById('jokeDisplay').innerText = dadJoke;
}
// make this thumbs toggle stay highlighted or not instead of a like button
function thumbsUpToggle(x) {
    x.classList.toggle("fa-thumbs-down");
}
document.getElementById('generateJoke').addEventListener('click', getDadJokes);



/*

for(let i = 1; i <= 10; i++) {
    const para = document.createElement('p');
    para.textContent = 'This is paragraph ' + i + '.';
    document.body.appendChild(para);
    addHandler(para, i);
    }

function addHandler(para, i) {
    para.onclick = function() {
        alert('Hello from paragraph ' + i + '!');
        }
    }
*/