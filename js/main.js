let hamburger = document.querySelector('.hamburger');
let navList = document.querySelector('.nav-list');
let navListLi = document.querySelectorAll('.list-reset');
let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');
let line3 = document.querySelector('.line-3');
let navLogo = document.querySelector('.nav-logo a img');
let menu = false;

hamburger.addEventListener('click', openMenu);

for (let i = 0; i < navListLi.length; i++) {
    navListLi[i].addEventListener('click', function(){
        navLogo.style.transform = 'rotate(-360deg)';
        hamburger.style.alignItems = 'end';
        line1.style.transform = 'rotate(0deg)';
        line1.style.width = '30px';
        line2.style.transform = 'rotate(0deg)';
        line2.style.marginBottom = '6px';
        line3.style.transform = 'rotate(0deg)';
        line3.style.width = '20px';

        navList.style.top = '-2500px';
        menu = false;
    });
}

function openMenu() {
    if(menu === false) {
        navLogo.style.transform = 'rotate(360deg)';
        hamburger.style.alignItems = 'center';
        line1.style.transform = 'rotate(45deg)';
        line1.style.width = '0';
        line2.style.transform = 'rotate(45deg)';
        line2.style.marginBottom = '0';
        line3.style.transform = 'rotate(-45deg)';
        line3.style.width = '25px';

        navList.style.top = '-32px';
        menu = true;
    }else{
        navLogo.style.transform = 'rotate(-360deg)';
        hamburger.style.alignItems = 'end';
        line1.style.transform = 'rotate(0deg)';
        line1.style.width = '30px';
        line2.style.transform = 'rotate(0deg)';
        line2.style.marginBottom = '6px';
        line3.style.transform = 'rotate(0deg)';
        line3.style.width = '20px';

        navList.style.top = '-2500px';
        menu = false;
    }
}