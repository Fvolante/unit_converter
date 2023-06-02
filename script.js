/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


// UI elements
const valueToConvert = document.getElementById("value-to-convert");
const convertBtn = document.getElementById("convert-btn");
const lengthSection = document.getElementById("length");
const volumeSection = document.getElementById("volume");
const massSection = document.getElementById("mass");


// Conversion constants
const meterFeet = 3.281;
const literGallon = 0.264;
const kiloPound = 2.204;


// helper functions to compute conversions aproximate to 3 decimals
function toMetric(value, conversionUnit) {
    return (value / conversionUnit).toFixed(3);
}

function toImperial(value, conversionUnit) {
    return (value * conversionUnit).toFixed(3);
}


// conversion
convertBtn.addEventListener("click", function() {

    // initial value
    const value = valueToConvert.value;

    // computed conversions
    // Length
    let feet = toImperial(value, meterFeet);
    let meter = toMetric(value, meterFeet);
    let lengthResult = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters`;
    
    lengthSection.textContent = lengthResult;

    // Volume
    let gallon = toImperial(value, literGallon);
    let liter = toMetric(value, literGallon); 
    let volumeResult = `${value} liters = ${gallon} gallons | ${value} gallons = ${liter} liters`;

    volumeSection.textContent = volumeResult;

    // Mass
    let pound = toImperial(value, kiloPound);
    let kilo = toMetric(value, kiloPound); 
    let massResult = `${value} kilos = ${pound} pounds | ${value} pounds = ${kilo} pounds`;

    massSection.textContent = massResult;
})




