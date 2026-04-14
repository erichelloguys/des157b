(function(){
    'use strict';
    console.log('reading JS');

    const fs = document.querySelector('.fa-expand-arrows-alt');
    
    fs.addEventListener('click', function() {
        // The fullscreenElement attribute returns null if the element is in windowed mode
        if (!document.fullscreenElement) {
            // document.documentElement returns the Element that is a direct child of the document,   which is the <html> element
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })
    
    const mySection = document.querySelector('#mySection');
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

})();