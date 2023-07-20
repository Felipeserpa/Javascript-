//var nomeA =["felipe","marcio","fernando","jose","carlos"];
//var nomeB =["felipe","marcio","fernando"];

var nomeA =["a","b","c","d","e"]
var nomeB =["b","g","h","c",]
 


for(let i = 0; i < nomeA.length;i++){

 

  for(let x = 0;x < nomeB.length;x++ ){
    
  if(nomeA[i] === nomeB[x]){
    console.log(nomeA[i],nomeB[x])
  }
  
  
}

}



/*Declarar um array com o nome de 5 pessoas, declarar um outro array com nome de 3 pessoas e exibir no console apenas os nomes que
 forem iguais entre ambos array.*/


 var nome = ["felipe","carlos","fernando","Amanda","Maria"];

 var nomeB = ["carlos","felipe","Amanda"];

 for(var i = 0;i < nome.length;i++){
    
    for(var x = 0;x < nomeB.length;x++){

      if(nome[i]== nomeB[x]){

        console.log(nome[i])
      }
    }

 }