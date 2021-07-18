
function showConsole(msg){
    console.log(msg);
}


function sum(a,b){
    var tong = a + b;
    console.log("tong la" + tong);
}

function showResult(){
    var aEle = document.querySelector('#numberA');
    var bEle = document.querySelector('#numberB');
    var sumResult = document.querySelector('#sumResult');
    var differenceResult = document.querySelector('#differenceResult');
    var quotientResult = document.querySelector('#quotientResult');
    var productResult = document.querySelector('#productResult');
    var sum = parseInt(aEle.value) + parseInt(bEle.value);
    var difference = parseInt(aEle.value) - parseInt(bEle.value);
    var quotient = parseInt(aEle.value) / parseInt(bEle.value);
    var product = parseInt(aEle.value) * parseInt(bEle.value);
    sumResult.innerHTML = 'Tổng là : ' + sum;
    differenceResult.innerHTML = 'Hiệu là: ' + difference;
    quotientResult.innerHTML = 'Thương là: ' + quotient;
    productResult.innerHTML = 'Tích là: ' + product;
}

sum(5,10);
showConsole("hello world");
showConsole("hi world");
