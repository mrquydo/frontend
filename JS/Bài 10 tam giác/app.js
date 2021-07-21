function CheckTriangle() {
  var aNumber = document.querySelector("#number-a");
  var bNumber = document.querySelector("#number-b");
  var cNumber = document.querySelector("#number-c");
  var resultEle = document.querySelector("#result");

  var aValue = parseInt(aNumber.value);
  var bValue = parseInt(bNumber.value);
  var cValue = parseInt(cNumber.value);

  if (aValue > 0 && bValue > 0 && cValue > 0) {
    if (Math.abs(aValue - cValue) < bValue && bValue < aValue + cValue) {
      resultEle.innerHTML = "Ba số tạo thành tam giác";
    } else {
      resultEle.innerHTML = "Ba số không tạo thành tam giác";
    }
  } else {
    resultEle.innerHTML = "Vui lòng nhập 3 số dương";
  }

  if ((aValue == bValue) == cValue) {
    resultEle.innerHTML = "3 số tạo thành tam giác cân";
  }
}
