function findX(){
    var aNumber = document.querySelector('#number-a');
    var bNumber = document.querySelector('#number-b');
    var resultEle = document.querySelector('#result');
    var x = -parseInt(bNumber.value) / parseInt(aNumber.value);

    if(parseInt(aNumber.value) == 0 && parseInt(bNumber.value) != 0){
        resultEle.innerHTML = 'Phương trình vô nghiệm';
    }

    else if(parseInt(aNumber.value) == 0 && parseInt(bNumber.value) == 0){
        resultEle.innerHTML = 'Phương trình vô số nghiệm';
    }

    else{
        resultEle.innerHTML = 'X = ' + x;
    }
}