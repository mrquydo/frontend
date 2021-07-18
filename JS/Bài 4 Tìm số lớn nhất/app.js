
function findMax (){
    var firstEle = document.querySelector('#firstNumber');
    var secondEle = document.querySelector('#secondNumber');
    var thirdEle = document.querySelector('#thirdNumber');
    var fourthEle = document.querySelector('#fourthNumber');
    var resultEle = document.querySelector('#result');

    var max = parseInt(firstEle.value);
    var label = "firstNumber: ";

    if(max < parseInt(secondEle.value)){
        max = parseInt(secondEle.value);
        label = "secondNumber: "
    }

    if(max < parseInt(thirdEle.value)){
        max = parseInt(thirdEle.value);
        label = "thirdNumber: "
    }    
    
    if(max < parseInt(fourthEle.value)){
        max = parseInt(fourthEle.value);
        label = "fourthNumber: "
    }

    resultEle.innerHTML = label + max;
}