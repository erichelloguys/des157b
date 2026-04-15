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
    // const mySection = document.querySelector('#mySection');
    const pOne = document.querySelector('#pOne');
    const pTwo = document.querySelector('#pTwo');
    const pThree = document.querySelector('#pThree');
    const pFour = document.querySelector('#pFour');

    const intervalID = setInterval(checkTime, 1000);

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

    window.addEventListener('mousemove', function(e){
        mouseX = e.clientX;
        mouseY = e.clientY;

        let mouseDistance = dist(mouseX, mouseY, shikanokoX, shikanokoY);

        if (mouseDistance < 150) {
            shikanokoX += (mouseX - shikanokoX) * easing;
            shikanokoY += (mouseY - shikanokoY) * easing;

            shikanoko.style.left = shikanokoX + 'px';
            shikanoko.style.top = shikanokoY + 'px';
        }
    } )

})();