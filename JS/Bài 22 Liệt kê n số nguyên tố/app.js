function analyzeNumber(){
    var nNumb = document.querySelector('#number-n');
    var resultEle = document.querySelector('#result');
    var numbList = '';

    if(nNumb.value <= 0){
        resultEle.innerHTML = 'Vui lòng nhập n > 0';
    }
    else{
        var count = 0;
        var m = 2;
        while(1){
            var mark = 1;
            for (var i = 2; i <= Math.sqrt(m); i++){
                if(m % i == 0){
                    mark = 0;
                    break;
                }
            }
            if(mark == 1) {
                count++;
                numbList += m +',';
            }
            if(count >= nNumb.value) {
                break;
            }
            m++;
        }
        resultEle.innerHTML = nNumb.value + ' số nguyên tố đầu tiên là: ' + numbList.substring(0, numbList.length -1);
    }
}