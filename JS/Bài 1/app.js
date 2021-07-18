
function showConsole(msg){
    console.log(msg);
}


function sum(a,b){
    var tong = a + b;
    console.log("tong la" + tong);
}

function showTotal(){
    var aEle = document.querySelector('#numberA');
    var bEle = document.querySelector('#numberB');
    var showBox = document.querySelector('#app');
    var sum = parseInt(aEle.value) + parseInt(bEle.value);
    showBox.innerHTML = sum;
}

sum(5,10);
showConsole("hello world");
showConsole("hi world");
