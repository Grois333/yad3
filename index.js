const listings = [{
    image: 'https://images.craigslist.org/00D0D_cw9SyIn9gD4_600x450.jpg',
    title: 'Vancouver Downtown',
    price: 3000,
    createdAt: 'Jul 13',
    description: 'This is a great place to live',
  },

  {
    image: 'https://images.craigslist.org/00F0F_fP3lawClZjg_600x450.jpg',
    title: 'Toronto Downtown',
    price: 3000,
    createdAt: 'Jul 12',
    description: 'Man this is a nice place',
  },

  {
    image: 'https://images.craigslist.org/00W0W_2nugv8sPJct_600x450.jpg',
    title: 'Ottawa Downtown',
    price: 3000,
    createdAt: 'Jul 11',
    description: 'Boy this is a nice place',
  },



];

let searchText = '';

//Create HTML

const render = () => {

  document.querySelector('ul').innerHTML = '';

  listings
    .filter(listing => {
      if (!searchText || (listing.title.toLowerCase().includes(searchText.toLowerCase()))) return true;
      else return false;
    })

    .forEach(listing => {
      const li = document.createElement('li');

      const img = document.createElement('img');
      img.src = listing.image;

      const container = document.createElement('div');
      container.className = 'listing-container';

      const date = document.createElement('span');
      date.innerHTML = listing.createdAt;

      const title = document.createElement('a');
      title.innerHTML = listing.title;
      title.href = '#';
      title.addEventListener('click', () => {
        console.log(listing);
        document.querySelector('.modal img').src = listing.image;
        document.querySelector('.modal h2').innerHTML = listing.title + ' - $' + listing.price;
        document.querySelector('.modal p').innerHTML = listing.description;

        document.querySelector('.shadow').style.display = 'flex';

        document.querySelector('.modal-close-button').addEventListener('click', () => {
          document.querySelector('.shadow').style.display = 'none';
        });
      });

      const priceContainer = document.createElement('div');
      const price = document.createElement('span');
      price.innerHTML = listing.price;

      priceContainer.appendChild(price);


      li.appendChild(img);
      container.appendChild(date);
      container.appendChild(title);
      container.appendChild(priceContainer);

      li.appendChild(container);

      document.querySelector('ul').appendChild(li);



    });

};

render(); //Render from the beggining



//On click function

function addNewListing() {

  const newTitle = document.querySelector('.add-listing-form input.title').value;

  const newPrice = document.querySelector('.add-listing-form input.price').value;

  const newDescription = document.querySelector('.add-listing-form input.description').value;

  const newImgUrl = document.querySelector('.add-listing-form input.img-url').value;

  const newCreatedAt = (new Date).toString().slice(4, 10);

  if (!newTitle || !newDescription || !newPrice || !newImgUrl) return; //if there is no data, it wont add it

  const newlisting = {
    title: newTitle,
    price: newPrice,
    image: newImgUrl,
    createdAt: newCreatedAt,
    description: newDescription,
  };

  listings.push(newlisting);

  render();

  document.querySelectorAll('.add-listing-form input').forEach(input => {
    input.value = '';
  });

}


function search() {

  const nextSearchText = document.querySelector('input.search').value;
  searchText = nextSearchText;

  render();

}

function closeModal(event) {

  const shadow = document.querySelector('.shadow')

  if (event.target === shadow) shadow.style.display = 'none';
}

// function searchKeypress(event) {
//   // console.log(event.keyCode);
//   if(event.keyCode === 13) search();
//
// }
