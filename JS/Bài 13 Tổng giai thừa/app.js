function sumConsole(n){
    var sum = 0;
    var gt = 1;
    
    for (var i = 1; i <= n; i++){
        gt *= i;
        sum += gt;
    }
    console.log (sum);

}

sumConsole(10);


function sumCalculation(){
    var nNumber = document.querySelector('#number-n');
    var resultEle = document.querySelector('#sum-result');
    var factorialResult = document.querySelector('#factorial-result');
    var factorialList = '';
    var sum = 0;
    var factorial = 1;


    for (var i = 1; i <= parseInt(nNumber.value); i++){
        factorial *= i;
        sum += factorial;
        factorialList += factorial + ', ';
    }
    factorialResult.innerHTML = 'Giá trị các giai thừa: ' + factorialList ;
    resultEle.innerHTML = 'Tổng các giai thừa là: ' + sum;
}