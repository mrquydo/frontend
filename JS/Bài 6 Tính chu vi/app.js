function findPerimeterAndArea(){
    var lengthEle = document.querySelector('#length');
    var widthEle = document.querySelector('#width');
    var areaEle = document.querySelector('#area');
    var perimeterEle = document.querySelector('#perimeter');

    var area = parseInt(lengthEle.value) * parseInt(widthEle.value);
    var perimeter = (parseInt(lengthEle.value) + parseInt(widthEle.value)) * 2;

    var rectangleEle = document.querySelector('#rectangle');

    rectangleEle.style.width = lengthEle.value + 'px';
    rectangleEle.style.height = widthEle.value + 'px';
    rectangleEle.style.background = 'violet';

    areaEle.innerHTML = 'Diện tích: ' + area + 'm2';
    perimeterEle.innerHTML = 'Chu vi: ' + perimeter + 'm';
}

