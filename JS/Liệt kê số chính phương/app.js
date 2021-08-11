var mNumb = document.getElementById('number-m');
var nNumb = document.getElementById('number-n');

var resultEle = document.querySelector('#result');

function findSquareNumber() {
    if(mNumb.value >= 0 && mNumb.value < nNumb.value) {
        var start = parseInt(Math.sqrt(mNumb.value));
        start = (start * start == mNumb.value) ? start : start + 1;
        var end = parseInt(Math.sqrt(nNumb.value));
        var numbList = "  ";

        for(let i = start; i <= end; i++ ){
            numbList += i * i + ', ';
        }
        resultEle.innerHTML = numbList.substring(0, numbList.length - 2) ;
    } else {
        resultEle.innerHTML = 'Vui lòng nhập lại số';
    }
}