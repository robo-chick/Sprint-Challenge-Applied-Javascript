// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.


function myCards(data) {
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const author = document.createElement('div');
    const img = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    author.classList.add('author');
    img.classList.add('img-container');

    cardHeadline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = data.authorName;

    card.append(cardHeadline);
    card.append(author);
    author.append(img);
    img.append(authorImg);
    authorImg.append(authorName);

    return card;

}

const newCard = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        const data = response.data.articles;
        for(let key in data){
            data[key].forEach(element => {
                const cardEntry = document.querySelector('.cards-container');
                cardEntry.append(myCards(element));
            })
        }
    })
      
