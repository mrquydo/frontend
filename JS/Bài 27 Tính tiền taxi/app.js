function calTaxiFee(){
    let kmNumb = document.querySelector('#km');
    let resultEe = document.querySelector('#result');
    let sum = 0;
    
    if(kmNumb.value <= 0){
        resultEe.innerHTML = 'Vui lòng nhập km >= 0';
    }
    else{
        if(kmNumb.value <= 1){
            resultEe.innerHTML = 'Tông tiền là: 15000';
        }
        else if(kmNumb.value <=5){
            sum = (kmNumb.value - 1) * 13500 + 15000;
            resultEe.innerHTML = 'Tổng tiền là: ' + sum;
        }
        else if(kmNumb.value < 120){
            sum = 15000 + 4 * 13500 + (kmNumb.value - 5) * 11000;
            resultEe.innerHTML = 'Tổng tiền là: ' + sum;
        }
        else{
            sum = (15000 + 4 * 13500 + (kmNumb.value - 5) * 11000) * 90 / 100;
            resultEe.innerHTML = 'Tổng tiền là: ' + sum;
        }
    }
}