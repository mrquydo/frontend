function calUserAge(){
    let yearEle = document.querySelector('#year-born');
    let resultEle = document.querySelector('#result');
    let today = new Date();
    let currentYear = today.getFullYear();
    // console.log(currentYear);

    resultEle.innerHTML = 'Tuổi người dùng là: ' + (currentYear - yearEle.value);
}