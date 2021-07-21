function FindOddEvenNumber(){
    var nEle = document.querySelector('#number-n');
    var resultEle = document.querySelector('#result');

    for (let i = 0; i < parseInt(nEle.value); i ++){
        resultEle.innerHTML = i;
    }
}