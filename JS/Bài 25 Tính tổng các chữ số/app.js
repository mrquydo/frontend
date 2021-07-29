function sumIndividualNumber(){
    let nNumb = document.querySelector('#number-n');
    let resultEle = document.querySelector('#result');
    let sum = 0;
    let n = nNumb.value;

    if(n < 0){
        n *= -1;
    }
     while(n > 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    resultEle.innerHTML = 'Tổng các chữ số của ' + nNumb.value + ' = ' + sum;
}