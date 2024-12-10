let button = document.getElementById ('button');
let algomhoria = document.getElementById ('algomhoria');
let input = document.getElementById ('input');
let card1 = document.getElementById ('card1');
let algomhoria2 = document.getElementById ('algomhoria2');
let algomhoria4 = document.getElementById ('algomhoria4')


button.onclick = function (){
    if(input.value == '102030' ||input.value.includes('بت')){
        location = 'algomhoria.html';
    }if(input.value =='10203040' || input.value.includes('المن')){
        location = 'algomhoria2.html';
    }if(input.value == '1020304050' || input.value == 'تبارك'){
        location = 'algomhoria3.html';
    }if(input.value == '103019' || input.value.includes('يو')){
        location = 'algomhoria4.html';
    }if(input.value == '101701' || input.value.includes('الش')){
        location = 'algomhoria5.html';
    }if(input.value == '101032' || input.value.includes('الشر')){
        location = 'algomhoria6.htmlك'
    }if(input.value == '107553' || input.value.includes('الع')){
        location = 'algomhoria7.html';
    }if(input.value == '102222'|| input.value.includes('الا') || input.value.includes('الأ')){
        location = 'algomhoria8.html';
    }if(input.value == '105020' || input.value.includes('بيج')){
        location = 'algomhoria9.html';
    }if(input.value == '101732' || input.value.includes('ناب')){
        location = 'algomhoria10.html'
    }if(input.value == '101111' || input.value.includes('مود')){
        location = 'algomhoria11.html'
    }
} 


let mode = document.getElementById ('mode');
let body = document.getElementById ('body');
let morning = document.getElementById ('morning');
let night = document.getElementById ('night');

