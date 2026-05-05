(function () {
    'use strict';

    let globalData;

    async function getData() {
        const travelLog = await fetch('bayAreaTravel.json')
        const data = await travelLog.json();

        globalData = data;

        document.querySelector('#picker').innerHTML = createSelectList(data);
    }

    function createSelectList(data) {
        let selectList = '<option value="">--Select a month--</option>';
        const dataPoints = Object.keys(data);

        dataPoints.forEach(function (eachPoint) {
            selectList += `<option value="${eachPoint}">${data[eachPoint].months}</option>`;
        })

        return selectList;
    }

    // const car = document.querySelector('#car');
    // const carSize = car.getBoundingClientRect();

    // let carX = carSize.left + window.scrollX;
    // let carY = carSize.top + window.scrollY;

    // console.log(carSize);
    // console.log(carX, carY);

    // function moveCar(data){
    //     const dataPoints = Object.keys(data);
    //     console.log(dataPoints);

    //     dataPoints.forEach(function(eachPoint){
    //         if (dataPoint < 1){
    //             carX.style.left += 10;
    //             carY.style.top += 10;
    //         }
    //     })
    // }

    function getIndex(value, data) {
        const dataPoints = Object.keys(data);
        return dataPoints.indexOf(value);
    }

    const oldX = -65;
    const oldY = 5;
    const oldWidth = 30;

    function resetCarValue() {
        car.style.left = `${oldX}vw`;
        car.style.bottom = `${oldY}vh`;
        car.style.maxWidth = `${oldWidth}vw`
    }

    function moveCar(value, data) {
        const index = getIndex(value, data);

        const moveX = 2;
        const moveY = -0.75;

        const newX = oldX + (moveX * index);
        const newY = oldY + (moveY * index);
        let newWidth = oldWidth + (oldWidth * index / 7);

        car.style.left = `${newX}vw`;
        car.style.bottom = `${newY}vh`;
        car.style.maxWidth = `${newWidth}vw`;
    }


    let html = document.querySelector('#purpose');
    let emptyArea = document.querySelector('#emptyArea');

    document.querySelector('#picker').addEventListener('change', function () {
        // event.preventDefault();
        const newValue = this.value;

        if (newValue) {
            updateInterface(newValue, globalData);
            updateEmptyArea(newValue, globalData);
            moveCar(newValue, globalData);
            // carX += ("10vw");
        } else {
            html.innerHTML = "";

            emptyArea.innerHTML = "<h2 id='billboardText'>Initializing...<h2>";
            emptyArea.style.backgroundImage = "none";

            resetCarValue();
        }
    })

    function updateInterface(value, jsonData) {

        html.innerHTML = `<p>In ${jsonData[value].months} I made <a id="numberOfTrip">${jsonData[value].trips}</a> trips back to the Bay area because: ${jsonData[value].purpose}</p>`;
    }

    function updateEmptyArea(value, jsonData) {
        emptyArea.style.backgroundImage = `url(${jsonData[value].image})`;
        emptyArea.innerHTML = "";
    }

    getData();
})();