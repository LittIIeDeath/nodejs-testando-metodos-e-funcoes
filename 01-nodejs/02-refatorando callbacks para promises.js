/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu Id
 2 Obter o endereco do usuario pelo Id 
*/
const util = require('util')
// convertendo um callback para promise
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error('Deu ruim!'))
            return resolve({
                id: 1,
                nome: 'Alan',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                ddd: 11,
                telefone: '13453939'
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
        setTimeout(() => {
            return callback(null, {
                rua: 'jardim',
                casa: 5
            })
        }, 1000)
    }

const usuarioPromise = obterUsuario()

usuarioPromise

    .then((usuario) => {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then((resultado) => {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        });
    })
    .then((resultado) => {
        console.log(`
        Nome: ${resultado.usuario.nome}
        Endereco: ${resultado.endereco.rua}, ${resultado.endereco.casa}
        Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}`)
    })
    .catch((error) => {
        console.log('error', error)
    })