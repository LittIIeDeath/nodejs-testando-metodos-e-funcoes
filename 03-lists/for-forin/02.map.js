const service = require('./service')

    Array.prototype.meuMap = function(callback){
        const novoArrayMapeado = []
        for (let indice = 0; indice <= this.length-1; indice++) {
            const result = callback(this[indice], indice)
            novoArrayMapeado.push(result)
        }

        return novoArrayMapeado;
    }

async function main(){
    try{
        const results = await service.obterPessoas('a')

        // Metodo forEach
        // const names = []
        // results.forEach(function (item){
        //     nomes.push(item.name)
        // })

        // Metodo .map
        // const names = results.map(function(pessoa){
        //     return pessoa.name
        // })

        // Metodo .map compactado
        // const names = results.map((pessoa) => pessoa.name)

        // Metodo map personalizado
        const names = results.meuMap((pessoa, indice) => {
            return `[${indice}] ${pessoa.name}`
        })

        console.log('nomes: ', names)
    }
    catch(error){
        console.log('erro interno: ', error)
    }
}
main()