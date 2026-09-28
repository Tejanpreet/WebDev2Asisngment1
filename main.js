"use strict";
// declaring all the mathematical equations in terms of arrow function
// for weight 
const KilogramsToPounds = (kilograms) => kilograms * 2.20462;
const PoundsToKilograms = (Pounds) => Pounds * 0.45359237;
const kgInput = document.getElementById("kg-input");
const poundInput = document.getElementById("pound-input");
const handleKilogramsToPoundsConversion = () => {
    const Kilograms = Number(kgInput.value);
    const pounds = KilogramsToPounds(Kilograms);
    poundInput.value = isNaN(pounds) ? '' : pounds.toFixed(2);
};
const handlePoundsToKilogramsConversion = () => {
    const pounds = Number(poundInput.value);
    const kilograms = PoundsToKilograms(pounds);
    kgInput.value = isNaN(kilograms) ? '' : kilograms.toFixed(2);
};
kgInput.addEventListener('input', handleKilogramsToPoundsConversion);
poundInput.addEventListener('input', handlePoundsToKilogramsConversion);
// for distance
const KilometersToMiles = (kilometers) => kilometers * 0.621371;
const MilesToKilometers = (miles) => miles * 1.609344;
const milesInput = document.getElementById("miles-input");
const kilometersInput = document.getElementById("kilometers-input");
const handleMilesToKilometersConversion = () => {
    const miles = Number(milesInput.value);
    const kilometers = MilesToKilometers(miles);
    kilometersInput.value = isNaN(kilometers) ? "" : kilometers.toFixed(2);
};
const handleKilometersToMilesConversion = () => {
    const kilometers = Number(kilometersInput.value);
    const miles = KilometersToMiles(kilometers);
    milesInput.value = isNaN(miles) ? "" : miles.toFixed(2);
};
milesInput.addEventListener("input", handleMilesToKilometersConversion);
kilometersInput.addEventListener("input", handleKilometersToMilesConversion);
// for temperature
const CelsiusToFarenheit = (celsius) => (celsius * 9) / 5 + 32;
const FarenheitToCelsius = (farenheit) => ((farenheit - 32) * 5) / 9;
const celsiusInput = document.getElementById("celsius-input");
const farenheitInput = document.getElementById("farenheit-input");
const handleCelsiusToFarenheitConversion = () => {
    const celsius = Number(celsiusInput.value);
    const farenheit = CelsiusToFarenheit(celsius);
    fahrenheitInput.value = isNaN(farenheit) ? "" : farenheit.toFixed(2);
};
const handleFarenheitToCelsiusConversion = () => {
    const farenheit = Number(farenheitInput.value);
    const celsius = FarenheitToCelsius(farenheit);
    celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(2);
};
celsiusInput.addEventListener("input", handleCelsiusToFarenheitConversion);
farenheitInput.addEventListener("input", handleFarenheitToCelsiusConversion);
// Higher-order conversion function
const createConverter = (fromUnit, toUnit) => {
    if (fromUnit === "kg" && toUnit === "lb") {
        return (value) => value * 2.20462;
    }
    if (fromUnit === "lb" && toUnit === "kg") {
        return (value) => value * 0.45359237;
    }
    if (fromUnit === "km" && toUnit === "mi") {
        return (value) => value * 0.621371;
    }
    if (fromUnit === "mi" && toUnit === "km") {
        return (value) => value * 1.609344;
    }
    if (fromUnit === "c" && toUnit === "f") {
        return (value) => (value * 9) / 5 + 32;
    }
    if (fromUnit === "f" && toUnit === "c") {
        return (value) => ((value - 32) * 5) / 9;
    }
    return (value) => value;
};
// Converts either a single value or an array of values
const convertValues = (converter, values) => {
    if (Array.isArray(values)) {
        return values.map(converter);
    }
    return converter(values);
};
// Buttons for tabs
const weightTab = document.getElementById("weight-tab");
const distanceTab = document.getElementById("distance-tab");
const temperatureTab = document.getElementById("temperature-tab");
const weightPage = document.getElementById("weight-page");
const distancePage = document.getElementById("distance-page");
const temperaturePage = document.getElementById("temperature-page");
// Makes it easy to see what tab you're on
function setActiveTab(activeTab) {
    // Make all tabs inactive
    weightTab.classList.remove("bg-black", "text-white");
    distanceTab.classList.remove("bg-black", "text-white");
    temperatureTab.classList.remove("bg-black", "text-white");
    // Make all tabs yellow
    weightTab.classList.add("bg-yellow-400", "text-black");
    distanceTab.classList.add("bg-yellow-400", "text-black");
    temperatureTab.classList.add("bg-yellow-400", "text-black");
    // Make the selected tab black
    activeTab.classList.remove("bg-yellow-400", "text-black");
    activeTab.classList.add("bg-black", "text-white");
}
// Makes the buttons work
weightTab.addEventListener("click", () => {
    weightPage.classList.remove("hidden");
    distancePage.classList.add("hidden");
    temperaturePage.classList.add("hidden");
    setActiveTab(weightTab);
});
distanceTab.addEventListener("click", () => {
    weightPage.classList.add("hidden");
    distancePage.classList.remove("hidden");
    temperaturePage.classList.add("hidden");
    setActiveTab(distanceTab);
});
temperatureTab.addEventListener("click", () => {
    weightPage.classList.add("hidden");
    distancePage.classList.add("hidden");
    temperaturePage.classList.remove("hidden");
    setActiveTab(temperatureTab);
});
