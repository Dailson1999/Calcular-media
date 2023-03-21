
(function(){
    function calcularMedia(){
        let resultado = 0;
        let notas = arguments.length;
        let media = 0;
       
        for(let i = 0; i < notas; i++){
            if(typeof arguments[i] !== "number"){

                throw Error("Erro! Somente números")
            }
            resultado += arguments[i]
        }
        media = (resultado/notas) || 0
        return media  
    }
    console.log(calcularMedia())
})()
