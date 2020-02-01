const CifraCesar = require('./cifra-cesar')
describe('algoritmo cifra cesar',function(){
    it('chamada da funcao cifrar com a letra A deve retornar D',function(){
        // pattern AAA
        // preparacao (arrange)
        const entrada = "a"
        const retorno = "d"
        // agir (action)
        const stringCifrada = CifraCesar.cifrar(entrada)
        // verificacao (assets)
        expect(stringCifrada).toEqual(retorno)
    })
    it('chamada da funcao cifrar com a letra B deve retornar E',function(){
        // pattern AAA
        // preparacao (arrange)
        const entrada = "b"
        const retorno = "e"
        // agir (action)
        const stringCifrada = CifraCesar.cifrar(entrada)
        // verificacao (assets)
        expect(stringCifrada).toEqual(retorno)
    })
    it('chamada da funcao cifrar com a palavra AB deve retornar DE',function(){
        // pattern AAA
        // preparacao (arrange)
        const entrada = "ab"
        const retorno = "de"
        // agir (action)
        const stringCifrada = CifraCesar.cifrar(entrada)
        // verificacao (assets)
        expect(stringCifrada).toEqual(retorno)
    })
    it('chamada da funcao cifrar com a palavra "Rafael" deve retornar "Udidho"',function(){
        const entrada = "Rafael"
        const retorno = "Udidho"
        
        const stringCifrada = CifraCesar.cifrar(entrada)
        
        expect(stringCifrada).toEqual(retorno)
    })
    it('chamada da funcao cifrar com a letra "x" deve retornar "a"',function(){
        const entrada = "x"
        const retorno = "a"

        const stringCifrada = CifraCesar.cifrar(entrada)

        expect(stringCifrada).toEqual(retorno)
    })
    it('chamada da funcao cifrar com a letra "yz" deve retornar "bc"',function(){
        const entrada = "yz"
        const retorno = "bc"

        const stringCifrada = CifraCesar.cifrar(entrada)

        expect(stringCifrada).toEqual(retorno)
    })
})