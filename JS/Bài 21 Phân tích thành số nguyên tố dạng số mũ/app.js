function analyzeNumber(){
    var nNumb = document.querySelector('#number-n');
    var resultEle = document.querySelector('#result');
    var numbList = '';
    var nValue = nNumb.value; /*Sao phải đặt biến như này thì giá trị k quay về 1 */

    if(nValue < 2){
        resultEle.innerHTML = 'Vui lòng nhập n > 1';
    }
    else{
        var i = 2;
        var count = 0;
        while (nValue> 1){
            if (nValue % i == 0){
                count++;
                if(nValue == i){
                    numbList += i + '^' + count;
                } 
                nValue /= i;
            }
            else{
                if(count > 0) {
                    numbList += i + '^' + count + ' x ';
                    count = 0;
                }
                i++;
            }
        }
        resultEle.innerHTML = nNumb.value + ' = ' + numbList;
    }
}