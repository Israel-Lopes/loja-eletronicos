const URL = 'https://israel-lopes.github.io/storage/productEletronicos.json';

/*
fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.product);
  });
*/

/*
fetch(URL)
  .then( function (response) {
    return response.json();
  })
  .then( function (data) {
    return console.log(data);
  })
  .then( function (erro) {
    return console.error('Erro ao fazer request', erro);
  })
  */

 fetch(URL)
 .then(resposta => resposta.json())
 .then(data => getData(data.product['eletroportateis'][0]))
 .catch(erro => console.error(erro));

function getData(data) {
  const eletronic = `
    name: ${data.name},
    id: ${data.id},
    price: ${data.price},
    image: ${data.price}
  `;
  console.log(eletronic);
}