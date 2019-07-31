const listings = [
  {
    image: 'https://images.craigslist.org/00D0D_cw9SyIn9gD4_600x450.jpg',
    title: 'Vancouver Downtown',
    price: 3000,
    createdAt: 'Jul 13'
  },

  {
    image: 'https://images.craigslist.org/00F0F_fP3lawClZjg_600x450.jpg',
    title: 'Toronto Downtown',
    price: 3000,
    createdAt: 'Jul 12'
  },

  {
    image: 'https://images.craigslist.org/00W0W_2nugv8sPJct_600x450.jpg',
    title: 'Ottawa Downtown',
    price: 3000,
    createdAt: 'Jul 11'
  },



];

//Create HTML

const render = ()=> {

  document.querySelector('ul').innerHTML = '';

listings.forEach(listing => {
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

render();

//On click function

function addNewListing() {

  const newTitle = document.querySelector('.add-listing-form input.title').value;

  const newPrice = document.querySelector('.add-listing-form input.price').value;

  const newImgUrl = document.querySelector('.add-listing-form input.img-url').value;

  const newCreatedAt = (new Date).toString().slice(4, 10);

  if(!newTitle || !newPrice || !newImgUrl) return;

  const newlisting = {
    title: newTitle,
    price: newPrice,
    image: newImgUrl,
    createdAt: newCreatedAt,
  };

  listings.push(newlisting);

  render();

  document.querySelectorAll('.add-listing-form input').forEach(input =>{
    input.value = '';
  });

}
