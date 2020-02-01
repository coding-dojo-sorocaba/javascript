let cesarcifra = {
    cifrar: function(palavra){
        let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
        alfabeto += alfabeto;

        let retorno = ""
        for (let posicao = 0; posicao < palavra.length; posicao++) {
            let letra = palavra[posicao];
            
            const ehMaiuscula = alfabeto.indexOf(letra) < 0
    
            if (ehMaiuscula) letra = letra.toLowerCase()

            const posicaoAtual = alfabeto.indexOf(letra)            
            const posicaoCifrada = posicaoAtual + 3
            // if (!alfabeto[posicaoCifrada]) {
            //     console.log('letra',letra)
            //     if (letra == 'y') {
            //         retorno += 'b'
            //     }
            //     retorno += 'a'
            //     break
            // }
   
            retorno += alfabeto[posicaoCifrada]

            if (ehMaiuscula) retorno = retorno.toUpperCase()
        }
        return retorno
    }
}

module.exports = cesarcifra