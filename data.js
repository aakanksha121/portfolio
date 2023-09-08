


document.addEventListener('DOMContentLoaded', function () {
    const helloText = document.getElementById('hello-text');
    const portfolioContent = document.getElementById('portfolio-content'); 
    const navBar = document.querySelector('nav');

    function hidePortfolioAndNavBar() {
        portfolioContent.style.display = 'none';
        navBar.style.display = 'none';
    }

    function showPortfolioAndNavBar() {
        portfolioContent.style.display = 'block';
        navBar.style.display = 'block';
    }
    function hideHelloText(){
        helloText.style.display='none';
    }
  
    const body=document.body;
    body.style.backgroundColor="black";
    body.style.color="white";

    function changeTextWithDelay(element, text, time) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (element) {
                    element.textContent = text;
                    // portfolioContent.style.opacity=0;
                    resolve();
                }
            }, time);
        });
    }

    async function displayGreetings() {
        hidePortfolioAndNavBar();
        await changeTextWithDelay(helloText, "•नमस्ते", 300);
        await changeTextWithDelay(helloText, "•Hola", 300);
        await changeTextWithDelay(helloText, "•வணக்கம்", 300);
        await changeTextWithDelay(helloText, "•ਹਿਲੋ", 300);
        await changeTextWithDelay(helloText, "•ہیلو", 300);
        await changeTextWithDelay(helloText, "•こんにちは", 300);
        await changeTextWithDelay(helloText, "•Bonjour", 300);
        await changeTextWithDelay(helloText, "•Привет", 300);
        await changeTextWithDelay(helloText, "•Hallo", 300);
        await changeTextWithDelay(helloText, "•स्वागत है", 400);
        await changeTextWithDelay(helloText, "no message", 600);
        
        showPortfolioAndNavBar();
        hideHelloText();
    }

    
    displayGreetings();
  
});


var slides=document.querySelectorAll('.slide');
var btns=document.querySelectorAll('.btn');
let currentSlide=1

var manualNav=function(manual){
    slides.forEach((slide)=>{
         slide.classList.remove('active');

         btns.forEach((btn)=>{
            btn.classList.remove('active');
         });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}


btns.forEach((btn, i)=>{
  btn.addEventListener("click", ()=>{
    manualNav(i);
    currentSlide=i;
  });
});


var repeat=function(activeClass){
    let active=document.getElementsByClassName('active');
    let i=1;

    var repeater=()=>{
        setTimeout(function(){
[...active].forEach((activeSlide)=>{
    activeSlide.classList.remove('active'); 
})

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length==i){
                i=0;
            }

            if(i>=slides.length){
                return;
            }
            repeater();
        },3500);
    }
    repeater();
}

repeat();


// time

let time=document.getElementById('current-time');

 setInterval(() => {
    let d=new Date();
    time.innerHTML = d.toLocaleTimeString();
 }, 1000);



//logo change
let nameLogo=document.getElementById('logo');
nameLogo.addEventListener('mouseover',()=>{
    nameLogo.textContent="Front-End Developer";
})

nameLogo.addEventListener('mouseout',()=>{
    nameLogo.textContent="Akanksha Shelke";
})