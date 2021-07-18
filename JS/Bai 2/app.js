function checkNumber(number) {
    if (number % 2 == 0){
        console.log("So Chan");
    }

    else{
        console.log("So Le");
    }
}


checkNumber(8);


function checkOddEvenNumber() {
    var inputEle = document.querySelector('#inputnumber');
    var resultEle = document.querySelector('#result');
    
    if (inputEle.value % 2 == 0){
        resultEle.innerHTML = "So Chan";
    }

    else{
        resultEle.innerHTML = "So Le";
    }
}