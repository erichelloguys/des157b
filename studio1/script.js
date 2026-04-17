(function(){
    'use strict';
    console.log('reading JS');

    const fsExpand = document.querySelector('.fa-expand-arrows-alt');
    const faPause = document.querySelector('.fa-circle-pause');
    
    fsExpand.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            fsExpand.classList.remove('fa-expand-arrows-alt');
            fsExpand.classList.add('fa-minimize');
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
            fsExpand.classList.add('fa-expand-arrows-alt');
            fsExpand.classList.remove('fa-minimize');
        }
    })

    faPause.addEventListener('click', function(){
        if (myVideo.paused){
            myVideo.play();
            faPause.classList.remove('fa-circle-play');
            faPause.classList.add('fa-circle-pause');
        } else {
            myVideo.pause();
            faPause.classList.remove('fa-circle-pause');
            faPause.classList.add('fa-circle-play');
        }
    })
    
    const myVideo = document.querySelector('#myVideo');

    const header = document.querySelector('header');
    const pOne = document.querySelector('#pOne');
    const pTwo = document.querySelector('#pTwo');
    const pThree = document.querySelector('#pThree');
    const pFour = document.querySelector('#pFour');

    setInterval(checkTime, 1000);

    function checkTime() {
        if (2 < myVideo.currentTime && myVideo.currentTime < 7){
            header.classList.add('hidden');

            pOne.classList.add('showing');
            pOne.classList.remove('hidden');
            pOne.style.top = "40%";
            pOne.style.left = "20%";

        } else {
            pOne.classList.add('hidden');
            pOne.classList.remove('showing');
        }

        if (9 < myVideo.currentTime && myVideo.currentTime < 14){
            pTwo.classList.add('showing');
            pTwo.classList.remove('hidden');
            pTwo.style.top = "40%";
            pTwo.style.right = "20%";
        } else {
            pTwo.classList.add('hidden');
            pTwo.classList.remove('showing');
        }

        if (17 < myVideo.currentTime && myVideo.currentTime < 21){
            pThree.classList.add('showing');
            pThree.classList.remove('hidden');
            pThree.style.top = "20%";
            pThree.style.left = "20%";
        } else {
            pThree.classList.add('hidden');
            pThree.classList.remove('showing');
        }

        if (25 < myVideo.currentTime && myVideo.currentTime < 30){
            pFour.classList.add('showing');
            pFour.classList.remove('hidden');
            pFour.style.top = "0%";
            pFour.style.left = "20%";
        } else {
            pFour.classList.add('hidden');
            pFour.classList.remove('showing');
        }
    }

    const shikanoko = document.querySelector("#shikanoko");
    const shikanokoRect = shikanoko.getBoundingClientRect();
    let mouseX = 0;
    let mouseY = 0;
    let easing = 0.05;

    let shikanokoX = shikanokoRect.left + window.scrollX;
    let shikanokoY = shikanokoRect.top + window.scrollY;

    function dist(x1, y1, x2, y2){
        return Math.hypot(x2 - x1, y2 - y1);
    }

    window.addEventListener('mousemove', function(event){
        mouseX = event.clientX;
        mouseY = event.clientY;

        let mouseDistance = dist(mouseX, mouseY, shikanokoX, shikanokoY);

        if (mouseDistance < 250) {
            shikanokoX += (mouseX - shikanokoX) * easing;
            shikanokoY += (mouseY - shikanokoY) * easing;

            shikanoko.style.left = shikanokoX + 'px';
            shikanoko.style.top = shikanokoY + 'px';
        } else {
            shikanoko.style.left = 10 + '%';
            shikanoko.style.top = 0 + '%';
            shikanokoX = shikanokoRect.left + window.scrollX;
            shikanokoY = shikanokoRect.top + window.scrollY;
        }
    } )

    // const allPs = document.querySelectorAll('p');
    // allPs.forEach(function(p){
    //     const words = p.textContent.split(' ');
    //     p.innerHTML = '';

    //     words.forEach(function(word, index){
    //         const span = document.createElement('span');
    //         span.innerText = word + ' ';
    //         span.classList.add('word');

    //         span.style.animationDelay = (index * 0.4) + 's';

    //         p.appendChild(span);
    //     })
    // })

    // const allWords = allPs.innerText.split(' ');

    // allWords.innerHTML = '';

    
    // allWords.forEach(function(word, index){
    //     const span = document.createElement('span');
    //     span.innerText = word;
    //     span.classList.add('word');

    //     span.style.animationDelay = `${index * 1}s`;

    //     allPs.appendChild(span);
    // })

    // allPs.forEach(p)

    // function moveLetter(){

    // }

    // // let allPs = document.querySelectorAll('p');

    // // const splicedWord = allPs.split("");
    // // const splicedLetter = splicedWord.split();

    // // const 
    // // console.log(splicedLetter);

    // // const letterCount = 0;

    // // for (i = 0; i < allPs.length; i ++){
        
    // // }

    // const allPs = document.querySelectorAll('p');
    // const pArray = pOne.split(" ");
    
    // console.log(pArray);
})();