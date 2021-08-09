let numbers = [

]

let numbList = document.querySelector('.number-list');
let inputEle = document.querySelector('.input-number');
let minResult = document.querySelector('.min-result');
let maxResult = document.querySelector('.max-result');

function addNumber(){
    let numberID = numbers.length + 1;
    let number = {
        id: numberID,
        numb: inputEle.value
    };
    numbers.push(number);

    let numbListContent = "";

    for(let index = 0; index < numbers.length; index++){
        numbListContent += numbers[index].numb + '  ';
        inputEle.value = "";
    }
    numbList.innerHTML = 'Các giá trị của mảng: ' + numbListContent;
}

function findMax(){
    let max = parseInt(numbers[0].numb);

    for(let index = 1; index < numbers.length; index++){
        if(max < parseInt(numbers[index].numb)){
            max = parseInt(numbers[index].numb);
        }
    }
    maxResult.innerHTML = 'Giá trị lớn nhất là: ' + max;
}

function findMin(){
    let min = parseInt(numbers[0].numb);

    for(let index = 1; index < numbers.length; index++){
        if(min > parseInt(numbers[index].numb)){
            min = parseInt(numbers[index].numb);
        }
    }
    maxResult.innerHTML = 'Giá trị nhỏ nhất là: ' + min;
}

