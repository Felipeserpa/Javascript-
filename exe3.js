

/*Cadastrar/Declarar um array de objeto com o nome e idade de 5 pessoas e exibir no console o nome e idade de quem for a mais velha.*/


var pessoas =[{
    nome:"Fernando",
    idade:10,
  },
  { nome:"Carlos",
    idade:20,
  }
  ,
  { nome:"Jose",
    idade:30,
  },
  { nome:"Marcos",
    idade:40,
  },
  { nome:"Fernanda",
    idade:60,
  }];

 var maior = 0;
 var nome =""

 for(let i = 0; i < pessoas.length; i++){
   
  if(pessoas[i].idade > maior){
   maior = pessoas[i].idade;
   nome = pessoas[i]
  }


 }console.log(maior, nome)
 




  


  





 var meuArray= [0,12,13,2,1273,28,1];

 var maior = 0;
for (let i = 0; i < meuArray.length; i++) {
   if ( meuArray[i] > meuArray[maior]) {
      meuArray[maior] = meuArray[i];
   }
}console.log(meuArray[maior])