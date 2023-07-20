var pessoas =[{
    nome:'Fernando',
    idade:15,
  },
  { nome:'Carlos',
    idade:18,
  }
  ,
  { nome:'Jose',
    idade:17,
  },
  { nome:'Marcos',
    idade:16,
  },
  { nome:'Fernanda',
    idade:19,
  }];
  
  
  function idade(pessoas){
    let novoArray = [];
    for( let i = 0 ; i < pessoas.length ; i++){
  
      if(pessoas[i].idade >= 18)
      novoArray.push(pessoas[i])
    }
    return novoArray;
  
  }
  var novoArray = idade(pessoas)
  console.log(novoArray)




  var pessoas =[{
    nome:'Fernando',
    idade:14,
  },
  { nome:'Carlos',
    idade:18,
  }
  ,
  { nome:'Jose',
    idade:17,
  },
  { nome:'Marcos',
    idade:16,
  },
  { nome:'Fernanda',
    idade:19,
  }];
  
  for(let i = 0; i < pessoas.length;i++){
    if(pessoas[i].idade >= 18){
      console.log(pessoas[i].nome)
    }
  }