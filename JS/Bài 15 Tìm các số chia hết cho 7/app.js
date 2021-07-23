function sumCalculation(){
    var nNumber = document.querySelector('#number-n');
    var resultEle = document.querySelector('#sum-result');
    var listEle = document.querySelector('#number-list');
    var sum = 0;
    var numberList = '';
    for (var i = 7; i <= nNumber.value; i +=7){
        numberList += i + ',';
        sum += i;
    }
    listEle.innerHTML = 'Các số chia hết cho 7: ' + numberList;
    resultEle.innerHTML = 'Tổng là: ' + sum;
}