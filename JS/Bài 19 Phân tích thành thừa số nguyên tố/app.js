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
        while (nValue> 1){
            if (nValue % i == 0){
                numbList += i + ' x ';
                nValue /= i;
            }
            else{
                i++;
            }
        }
        resultEle.innerHTML = nNumb.value + ' = ' + numbList.substring(0, numbList.length -2);
    }
}