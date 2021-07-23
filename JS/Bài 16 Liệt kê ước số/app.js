function findSubmultiple(){
    var nNumber = document.querySelector('#number-n');
    var countEle = document.querySelector('#submultiple-count');
    var listEle = document.querySelector('#submultiple-list');
    var count = 0
    var numberList = '';
    for (var i = 1; i <= nNumber.value; i ++){
        if(nNumber.value % i ==0){
            numberList += i + ',';
            count++;
        }
    }
    listEle.innerHTML = 'Các ước số của n: ' + numberList;
    countEle.innerHTML = 'Tổng số ước số: ' + count;
}