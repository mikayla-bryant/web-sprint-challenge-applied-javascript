// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const entryPointCards = document.querySelector('.cards-container');

const cardCreator = () => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const author = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(authContainer);
    authContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    authContainer.appendChild(author);

    card.classList.add('card');
    headline.classList.add('headline');
    authContainer.classList.add('author');
    imageContainer.classList.add('img-container');
    

    headline.textContent = "Headline";
    //image.src = article.authorPhoto;
    author.textContent = "Test text";


    return card;
}
const result = cardCreator();
entryPointCards.appendChild(result);


const axiosPromise = axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    for(let i = 0; i < response.data.articles.javascript.length; i++){
        const array = response.data.articles.javascript[i];
        console.log(array);
    }
  
})

/*const axiosPromise = axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    for(let i = 0; i < response.data.articles.javascript.length; i++){
        console.log(response.data.articles.javascript[i]); //response.data.articles.javascript[array]
    }
  
})
 I got this to print each object in the array
*/ 

/*
const axiosPromise = axios.get('https://lambda-times-api.herokuapp.com/articles')
.then( response => {
        console.log("success", response);
    })
*/