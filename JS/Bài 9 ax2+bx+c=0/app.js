function findX(){
    var aNumber = document.querySelector('#number-a');
    var bNumber = document.querySelector('#number-b');
    var cNumber = document.querySelector('#number-c');
    var resultEle = document.querySelector('#result');

    var aValue = parseInt(aNumber.value);
    var bValue = parseInt(bNumber.value);
    var cValue = parseInt(cNumber.value);

    var x = -cValue / bValue;

    if(aValue == 0){
        if(bValue == 0 && cValue != 0){
            resultEle.innerHTML = 'Phương trình vô nghiệm';
        }
    
        else if(bValue == 0 && cValue == 0){
            resultEle.innerHTML = 'Phương trình vô số nghiệm';
        }
    
        else{
            resultEle.innerHTML = 'X = ' + x;
        }
    }

    else{
        var delta = bValue * bValue - 4 * aValue *cValue;

        if(delta < 0){
            resultEle.innerHTML = 'Phương trình vô nghiệm';
        }

        else if(delta == 0) {
            x = -bValue / (2 * aValue);
            resultEle.innerHTML = 'Phương trình có nghiệm kép X = ' + x;
        }

        else{
            var x1 = (-bValue + Math.sqrt(delta)) / (2 * aValue);
            var x2 = (-bValue - Math.sqrt(delta)) / (2 * aValue);
            resultEle.innerHTML = 'X1 = ' + x1 + '     X2 = ' + x2;
        }
    }
}