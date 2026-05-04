(function(){
    'use strict';

    let globalData;

    async function getData(){
        const travelLog = await fetch('bayAreaTravel.json')
        const data = await travelLog.json();

        globalData = data;

        document.querySelector('#picker').innerHTML = createSelectList(data);

        document.querySelector('#purpose').innerHTML = outputHTML(data);
    }

    function createSelectList(data){
        let html = '<option value="">--Select a month--</option>';

        const dataPoints = Object.keys(data);
        
        dataPoints.forEach(function(eachPoint){
            html += `<option value="${eachPoint}">${data[eachPoint].months}</option>`;
        })

        return html;
    }

    document.querySelector('#picker').addEventListener('change', function(){
        const newValue = this.value;

        if (newValue){
            updateInterface(newValue, globalData);
            updateEmptyArea(newValue, globalData);
        } else {
            document.querySelector('#purpose').innerHTML = "";

            emptyArea.innerHTML = "<h2 id='billboardText'>Initializing...<h2>";
            emptyArea.style.backgroundImage = "none";
        }
    })

    function updateInterface(value, jsonData){

        let html = '<p>';

        html += `In ${jsonData[value].months} I made <a id="numberOfTrip">${jsonData[value].trips}</a> trips back to the Bay area because: ${jsonData[value].purpose}`;

        html += '</p>';
        document.querySelector('#purpose').innerHTML = html;
    }

    let emptyArea = document.querySelector('#emptyArea');

    function updateEmptyArea(value, jsonData){
        emptyArea.style.backgroundImage = `url(${jsonData[value].image})`;
        emptyArea.innerHTML = "";
    }

    getData();
})();