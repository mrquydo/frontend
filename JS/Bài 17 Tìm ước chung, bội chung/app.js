function findSubmultipleMultiple(){
    var aNumber = document.querySelector('#number-a')
    var bNumber = document.querySelector('#number-b')
    var min = document.querySelector('#min-multiple')
    var max = document.querySelector('#max-submultiple')
    var a = parseInt(aNumber.value);
    var b = parseInt(bNumber.value);

    if(a >= 0 && b >= 0){
        if(a == 0 && b == 0){
            min.innerHTML = 'Không tồn tại bội chung nhỏ nhât';
            max.innerHTML = 'Không tồn tại ước chung lớn nhât';
        }
        if(a == 0 && b != 0){
            min.innerHTML = 'Không có bội chung nhỏ nhât';
            max.innerHTML = 'Ước chung lớn nhất là: ' + b;
        }
        if(a != 0 && b == 0){
            min.innerHTML = 'Không có bội chung nhỏ nhât';
            max.innerHTML = 'Ước chung lớn nhất là: ' + a;
        }
        else{
            // a,b > 0
            var ab = a * b;
            while(a != b){   /*sao phai dung while*/
                if(a > b){
                    a = a - b;
                }
                else{
                    b = b - a;
                }
            }
            min.innerHTML = 'Bội chung nhỏ nhất là: ' + (ab / a);
            max.innerHTML = 'Ước chung lớn nhất là: ' + a ;
        }
    }
    else{
        min.innerHTML = 'Vui lòng nhập a, b > 0';
    }
}