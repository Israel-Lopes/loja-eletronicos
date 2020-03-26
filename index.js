/**
 * Creating home page carousel
 */
(function createCarousel () {

  var areaRoot = document.querySelector('.area-root');
  var carousel = document.createElement('ul');
  carousel.setAttribute('class', 'carousel');

  /**
   * Create carousel card
   * @param {Object} item 
   */
  var createCard = (item, index) => {
    var carouselCard = document.createElement('li');
    carouselCard.setAttribute('class', 'item');
    carouselCard.setAttribute('id', item.id);

    var image = document.createElement('img');
    image.setAttribute('src', item.image);
    carouselCard.appendChild(image);

    var name = document.createElement('span');
    name.setAttribute('class', 'product-details')
    name.innerText = item.name;
    carouselCard.appendChild(name);

    var price = document.createElement('span');
    price.setAttribute('class', 'product-price');
    price.innerText = item.price;
    carouselCard.appendChild(price);

    carousel.appendChild(carouselCard);
    
    areaRoot.appendChild(carousel);
  }

  const URL = 'https://israel-lopes.github.io/storage/productEletronicos.json';
  fetch(URL)
    .then(resposta => resposta.json())
    .then(data => data.product['eletroportateis'].map((item, index) => {
      createCard(item, index);
    }))
    .catch(erro => console.error(erro));

})();
