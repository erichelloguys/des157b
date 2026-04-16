(function(){
    'use strict';
    console.log('reading JS');

    const fs = document.querySelector('.fa-expand-arrows-alt');
    
    if (fs) {
        fs.addEventListener('click', function() {
            // The fullscreenElement attribute returns null if the element is in windowed mode
            if (!document.fullscreenElement) {
                // document.documentElement returns the Element that is a direct child of the document,   which is the <html> element
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
    }
    
    const myVideo = document.querySelector('#myVideo');
    const pOne = document.querySelector('#pOne');
    const pTwo = document.querySelector('#pTwo');
    const pThree = document.querySelector('#pThree');
    const pFour = document.querySelector('#pFour');

    setInterval(checkTime, 1000);

    function checkTime() {
        if (2 < myVideo.currentTime && myVideo.currentTime < 7){
            pOne.className = 'showing';
        } else {
            pOne.className = 'hidden';
        }

        if (9 < myVideo.currentTime && myVideo.currentTime < 14){
            pTwo.className = 'showing';
        } else {
            pTwo.className = 'hidden';
        }

        if (17 < myVideo.currentTime && myVideo.currentTime < 21){
            pThree.className = 'showing';
        } else {
            pThree.className = 'hidden';
        }

        if (25 < myVideo.currentTime && myVideo.currentTime < 30){
            pFour.className = 'showing';
        } else {
            pFour.className = 'hidden';
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

        if (mouseDistance < 200) {
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

    allPs.forEach(p)

    function moveLetter(){

    }

    // let allPs = document.querySelectorAll('p');

    // const splicedWord = allPs.split("");
    // const splicedLetter = splicedWord.split();

    // const 
    // console.log(splicedLetter);

    // const letterCount = 0;

    // for (i = 0; i < allPs.length; i ++){
        
    // }

    const allPs = document.querySelectorAll('p');
    const pArray = pOne.split(" ");
    
    console.log(pArray);
})();