const coin = document.querySelector('#coin');
const precoUnit = document.querySelector('.precoUnit');
const qtd = document.querySelector('.qtd');
const precoOferta = document.querySelector('.precoOferta');

coin.addEventListener('change', selecionarMoeda);

function selecionarMoeda() {
  const promiseResponse = fetch(`https://www.mercadobitcoin.net/api/${coin.value}/ticker`);

  promiseResponse.then((resposta) => {
    const promiseBody = resposta.json();

    promiseBody.then((body) => {
      precoUnit.textContent = Number(body.ticker.high).toFixed(2);
      qtd.textContent = Number(body.ticker.vol).toFixed(2);
      precoOferta.textContent = Number(body.ticker.buy).toFixed(2);
    })
  })
}