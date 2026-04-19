(function(){
    'use strict';
    console.log('reading JS');

    const fsExpand = document.querySelector('.fa-expand-arrows-alt');
    const faPlay = document.querySelector('.fa-circle-play');
    const faVolume = document.querySelector('.fa-volume-off');
    const faSwitch = document.querySelector('.fa-rotate');

    const expand = document.querySelector('#expand');
    const play = document.querySelector('#play');
    const jpDub = document.querySelector('#jpDub');
    const volume = document.querySelector('#volume');
    
    fsExpand.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            expand.innerHTML = '<a>Shrink</a>'
            fsExpand.classList.remove('fa-expand-arrows-alt');
            fsExpand.classList.add('fa-minimize');
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
            expand.innerHTML = '<a>Expand</a>'
            fsExpand.classList.add('fa-expand-arrows-alt');
            fsExpand.classList.remove('fa-minimize');
        }
    })

    faPlay.addEventListener('click', function(){
        if (myVideo.paused){
            play.innerHTML = '<a>Pause</a>'

            myVideo.play();
            faPlay.classList.remove('fa-circle-play');
            faPlay.classList.add('fa-circle-pause');
        } else {
            play.innerHTML = '<a>Play</a>'

            myVideo.pause();
            faPlay.classList.remove('fa-circle-pause');
            faPlay.classList.add('fa-circle-play');
        }
    })

    faVolume.addEventListener('click', function(){
        if (myVideo.muted){
            volume.innerHTML = '<a>Mute</a>'

            myVideo.muted = false;
            faVolume.classList.remove('fa-volume-off');
            faVolume.classList.add('fa-volume-high');
        } else {
            volume.innerHTML = '<a>Unmute</a>'

            myVideo.muted = true;
            faVolume.classList.remove('fa-volume-high');
            faVolume.classList.add('fa-volume-off');
        }
    })

    let enSource = true;

    faSwitch.addEventListener('click', function(){
        if (enSource){
            jpDub.innerHTML = '<a>EN Dub</a>';
            enSource = false;

            webmSource.src = 'medias/naraDeerHD_JP.webm';
            mp4Source.src = 'medias/naraDeerHD_JP.mp4';
        } else {
            jpDub.innerHTML = '<a>JP Dub</a>';
            enSource = true;

            webmSource.src = 'medias/naraDeerHD_EN.webm';
            mp4Source.src = 'medias/naraDeerHD_EN.mp4';
        }

        myVideo.load();
        myVideo.play();
    })
     
    const myVideo = document.querySelector('#myVideo');
    const webmSource = document.querySelector('#webmSource');
    const mp4Source = document.querySelector('#mp4Source');

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
            pFour.style.top = "10%";
            pFour.style.left = "20%";
        } else {
            pFour.classList.add('hidden');
            pFour.classList.remove('showing');
        }
    }

    const shikanoko = document.querySelector('#shikanoko');
    const shikanokoRect = shikanoko.getBoundingClientRect();
    const arrow = document.querySelector('#arrow');

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
            arrow.classList.add('hidden');
            myVideo.style.filter = "blur(3px) saturate(150%)";

            shikanoko.style.left = shikanokoX + 'px';
            shikanoko.style.top = shikanokoY + 'px';
        } else {
            shikanoko.style.left = 15 + '%';
            shikanoko.style.top = 15 + '%';
            shikanokoX = shikanokoRect.left + window.scrollX;
            shikanokoY = shikanokoRect.top + window.scrollY;
            arrow.classList.remove('hidden');
            myVideo.style.filter = "none";
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