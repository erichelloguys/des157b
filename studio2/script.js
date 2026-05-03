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
        } else {
            document.querySelector('#purpose').innerHTML = "";
        }
    })

    function updateInterface(value, jsonData){

        let html = '<p>';

        html += `In ${jsonData[value].months} I made <a id="numberOfTrip">${jsonData[value].trips}</a> trips back to the Bay area because: ${jsonData[value].purpose}`;

        html += '</p>';
        document.querySelector('#purpose').innerHTML = html;
    }

    function updateEmptyArea(value, jsonData){
        document.querySelector('#emptyArea').innerHTML = '<img>';
    }

    getData();
})();