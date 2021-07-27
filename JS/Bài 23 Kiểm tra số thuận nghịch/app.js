function analyzeNumber(){
    var nNumb = document.querySelector('#number-n');
    var resultEle = document.querySelector('#result');
    var reverseNumb = 0;
    var  m = parseInt(nNumb.value);

    while(m > 0){
        reverseNumb = reverseNumb * 10 + m % 10;
        m /= 10;
    }
    if(reverseNumb == parseInt(nNumb.value)){
        resultEle.innerHTML = nNumb.value + ' là số thuận nghịch';
    }
    else{
        resultEle.innerHTML = nNumb.value + ' không phải là số thuận nghịch';
    }
}