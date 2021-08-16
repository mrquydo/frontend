var hNumb = document.getElementById('number-h');
var resultEle = document.querySelector('#result');



function Draw(){
    var h = parseInt(hNumb.value);

    var jResult = "";

    if(h > 0){
        for(let i = 1; i <= h; i++){
            for(let j = 1; j <= h * 2; j++){
                if(Math.abs(h - j) <= (i - 1)){
                    jResult +=  i - Math.abs(h - j);
                } else {
                    jResult += " "
                }
            }
            jResult += "\n";
        }
        resultEle.innerHTML = jResult;
    } else{
        resultEle.innerHTML = "Vui lòng nhập lại h > 0"
    }
}