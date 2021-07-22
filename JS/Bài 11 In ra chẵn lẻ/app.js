function FindOddEvenNumber(){
    var nEle = document.querySelector('#number-n');
    var resultEle = document.querySelector('#result');

    for (let i = 0; i < parseInt(nEle.value); i +=2){
        resultEle.innerHTML += i;
    }
}


function FindOddEvenNumberConsole (number){
    var oddNumberList = '';
    var EvenNumberList = '';

    for(var i = 1; i < number; i++){
        if (i % 2 == 0){
            EvenNumberList += i + ",";
        }
        else {
            oddNumberList += i + ",";
        }
    }

    console.log(EvenNumberList + 'EvenList');
    console.log(oddNumberList + 'OddList');
}

FindOddEvenNumberConsole (100);

function Sum (number){
    var tong = 0;
    for (var i = 1; i <= number; i++){
        tong = tong + i;
    }
    console.log(tong + 'tong la');
}

Sum (10);