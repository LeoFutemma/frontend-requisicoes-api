const cep = document.querySelector('#cep');
const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');

cep.addEventListener('change', preencherFormulario);

function preencherFormulario() {
  if (cep.value.length !== 8) {
    alert("Insira um CEP válido");
    return;
  }

  const promiseResponse = fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

  promiseResponse.then((resposta) => {
    const promiseBody = resposta.json();

    promiseBody.then((body) => {
      if (body.erro) {
        alert("CEP NÃO ENCONTRADO")
        return;
      }

      cidade.value = body.localidade;
      rua.value = body.logradouro;
    })
  });
}