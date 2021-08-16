var mNumb = document.getElementById('number-m');
var nNumb = document.getElementById('number-n');
var resultEle = document.querySelector('#result');



function Draw(){
    var m = parseInt(mNumb.value);
    var n = parseInt(nNumb.value);
    var jResult = "";

    if(m > 0 && n > 0){
        for(let i = 1; i <= m; i++){
            for(let j = 1; j <= n; j++){
                jResult +=  j;
            }
            jResult += "\n";
        }
        resultEle.innerHTML = jResult;
    } else{
        resultEle.innerHTML = "Vui lòng nhập lại m,n > 0"
    }
}