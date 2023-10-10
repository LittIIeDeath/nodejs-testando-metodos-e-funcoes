/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu Id
 2 Obter o endereco do usuario pelo Id 
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Alan',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            ddd: 11,
            telefone: '13453939'
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'jardim',
            casa: 5
        })
    }, 1000)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.log('deu ruim')
        return
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.log('deu ruim em telefone')
            return
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.log('deu ruim em telefone')
                return
            }

            console.log(`
      Nome: ${usuario.nome}
      telefone: (${telefone.ddd}) ${telefone.telefone}
      endereco: ${endereco.rua} ${endereco.casa}
      `)
        })
    })
})
// const telefone = obterTelefone(usuario.id)


// console.log('usuario', telefone)