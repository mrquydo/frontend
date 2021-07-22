function sumFractionConsole(number){
    var sum = 0;
    for (var i = 1; i <= number; i++){
        sum = sum + 1/i;
    }
    console.log (Math.round(sum));
}

sumFractionConsole(10);


function sumFraction(){
    var nNumber = document.querySelector('#number-n');
    var sum = 0;
    var resultEle = document.querySelector('#result');

    for (var i = 1; i <= parseInt(nNumber.value); i++){
        sum = sum + 1/i;
    }

    resultEle.innerHTML = 'Tổng là: ' + Math.round(sum);
}