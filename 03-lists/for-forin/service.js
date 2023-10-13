const axios = require('axios')
const URL = 'https://www.swapi.tech/api/people'

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data.results
}

// obterPessoas('r2')
//     .then(function (resultado){
//         console.log('resultado: ', resultado)
//     })
//     .catch(function(error){
//         console.error('DEU RUIM: ', error)
//     })

module.exports = {
    // em JS se a chave do obj for o mesmo nome do valor eu nao preciso passar o valor
    // obterPessoas: obterPessoas ->
    obterPessoas
}