var a = 2;
var b = 4;
var x = 0;

if (a == 0) {
  if (b == 0) {
    x = "vo so nghiem";
  } else {
    x = "phương trinh vo nghiem";
  }
} else {
  x = -b / a;
}

console.log('nghiệm của pt là: ' + x);