var mNumb = document.getElementById('number-m');
var nNumb = document.getElementById('number-n');
var resultEle = document.querySelector('#result');

var m = parseInt(mNumb.value);
var n = parseInt(nNumb.value);

function checkIsCoprime(){
    if(m > 0 && n > 0){
        while(m != n){
            if(m > n){
                m = m - n;
            } else {
                n = n - m;
            }
        }
        if(m == 1){
            resultEle.innerHTML = `${mNumb.value} và ${nNumb.value} là 2 số nguyên tố cùng nhau`; 
        } else {
            resultEle.innerHTML = `${mNumb.value} và ${nNumb.value} không phải 2 số nguyên tố cùng nhau`; 
        }
    }
    else{
        resultEle.innerHTML = 'Vui lòng nhập m,n > 0';
    }
}