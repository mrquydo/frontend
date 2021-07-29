function calFactorial(){
    let nNumb = document.querySelector('#number-n');
    let resultEle = document.querySelector('#result');
    var n = 1;

    if(nNumb.value == 0) {
        resultEle.innerHTML = 'n! = 1'; 
    }
    else{
        for(let i = 1; i <= nNumb.value; i++ ) {
            n *= i;
        }
        resultEle.innerHTML = nNumb.value + '! = ' + n;
    }
}