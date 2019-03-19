
function fatorial(x){
    var soma=1;
    for(var j = x ; j >=1 ;j--){
        soma *= j;
    }
    return soma;
}

module.exports={
    fatorial
}