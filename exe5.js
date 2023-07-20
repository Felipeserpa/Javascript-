//var nomeA =["felipe","marcio","fernando","jose","carlos"];
//var nomeB =["felipe","marcio","fernando"];

var nomeA =["a","b","c","d","e"]
var nomeB =["b","g","h"]
 var novoArray = []
 

for(let i = 0; i < nomeA.length;i++){


   for(let x = 0;x < nomeB.length;x++){
    
if(nomeA[i] !== nomeB[x]){
    novoArray.push (nomeA[i])
    novoArray.push (nomeB[x])

}console.log(novoArray)

}



   

}
   






        















var array1 = [2, 2, 3];
var array2 = [2, 4, 4];
var array3 = [array1[0]];

for(i = 1; i < array1.length; i++)
{
    var tem = false;
    for(j = 0; j < array3.length; j++){

        if (array1[i] === array3[j]){
            tem = true;
        }
    }
    if (!tem){
       array3.push(array1[i]); 
    }
}
for(i = 0; i < array2.length; i++)
{
    var tem = false;
    for(j = 0; j < array3.length; j++){

        if (array2[i] === array3[j]){
            tem = true;
        }
    }
    if (!tem){
       array3.push(array2[i]); 
    }
}

console.log(array3); 