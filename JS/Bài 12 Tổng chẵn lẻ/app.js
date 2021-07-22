function sumConsole(n){
    var sum = 0;
    var sumOdd = 0;
    var sumEven =0;

    for (var i = 1; i <= n; i++){
        sum += i;
    }
    console.log (sum);

    for (var i = 1; i <=n; i++){
        if (i % 2 == 0){
            sumEven +=i;
        }
        else{
            sumOdd +=i;
        }
    }
    console.log (sumOdd);
    console.log (sumEven);
}

sumConsole(10);

function sumCalculation(){
    var nNumber = document.querySelector('#number-n');
    var sumResult = document.querySelector('#sum-result');
    var sumOddResult = document.querySelector('#sumOdd-result');
    var sumEvenResult = document.querySelector('#sumEven-result');

    var sum = 0;
    var sumOdd = 0;
    var sumEven =0;

    for (var i = 1; i <= parseInt(nNumber.value); i++){
        sum += i;
    }
    sumResult.innerHTML = 'Tổng là: ' + sum;

    for (var i = 1; i <= parseInt(nNumber.value); i++){
        if (i % 2 == 0){
            sumEven +=i;
        }
        else{
            sumOdd +=i;
        }
    }
    sumOddResult.innerHTML = 'Tổng các số lẻ là: ' + sumOdd;
    sumEvenResult.innerHTML = 'Tổng các số chẵn là: ' + sumEven;
}