let button = document.getElementById ('button');
let algomhoria = document.getElementById ('algomhoria');
let input = document.getElementById ('input');
let card1 = document.getElementById ('card1');
let algomhoria2 = document.getElementById ('algomhoria2');



button.onclick = function (){
    if(input.value == '102030' ||input.value == 'بترا'){
        location = 'algomhoria.html';
    }if(input.value =='10203040' || input.value == 'المنطاوى'){
        location = 'algomhoria2.html';
    }if(input.value == '1020304050' || input.value == 'تبارك'){
        location = 'algomhoria3.html'
    }
}