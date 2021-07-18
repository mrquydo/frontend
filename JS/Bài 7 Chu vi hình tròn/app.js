function findPerimeterAndArea(){
    var radiusEle = document.querySelector('#radius');
    var areaEle = document.querySelector('#area');
    var perimeterEle = document.querySelector('#perimeter');

    var PI = 3.14;

    var circleEle = document.querySelector('#circle');

    if(parseInt(radiusEle.value) <= 0){
        areaEle.innerHTML = 'không xác định';
        perimeterEle.innerHTML = 'không xác định';
    }

    else{
        areaEle.innerHTML = 'Diện tích là: ' + (parseInt(radiusEle.value) * parseInt(radiusEle.value) * PI);
        perimeterEle.innerHTML = 'Chu Vi là: ' + (parseInt(radiusEle.value) * 2 * PI);

        circleEle.style.width = parseInt(radiusEle.value) + 'px';
        circleEle.style.height = parseInt(radiusEle.value) + 'px';
        circleEle.style.borderRadius = '50%';
        circleEle.style.background = 'violet';
    }
}