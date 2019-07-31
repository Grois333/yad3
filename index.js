const listings = [
  {
    image: 'https://images.craigslist.org/00D0D_cw9SyIn9gD4_600x450.jpg',
    title: 'Vancouver Downtown',
    price: 3000,
    creatAt: 'Jul 13'
  },

  {
    image: 'https://images.craigslist.org/00F0F_fP3lawClZjg_600x450.jpg',
    title: 'Toronto Downtown',
    price: 3000,
    creatAt: 'Jul 12'
  },

  {
    image: 'https://images.craigslist.org/00W0W_2nugv8sPJct_600x450.jpg',
    title: 'Ottawa Downtown',
    price: 3000,
    creatAt: 'Jul 11'
  },



];



listings.forEach(listing => {
  const li = document.createElement('li');

  const img = document.createElement('img');
  img.src = listing.image;

  const container = document.createElement('div');
  container.className = 'listing-container';

  const date = document.createElement('span');
  date.innerHTML = listing.creatAt;

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
