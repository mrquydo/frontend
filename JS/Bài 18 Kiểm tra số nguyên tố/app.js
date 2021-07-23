function findPrime(){
    var nNumb = document.querySelector('#number-n');
    var resultEle = document.querySelector('#result');
    var count = 0;

    for(i = 1; i <= nNumb.value; i++){
        if(nNumb.value % i == 0){
            count++;
        }
    }
    if (count != 2){
        resultEle.innerHTML = nNumb.value + ' không phải là số nguyên tố';
    }
    else {
        resultEle.innerHTML = nNumb.value + ' là số nguyên tố';
    }
}