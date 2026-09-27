"use strict";
// declaring all the mathematical equations in terms of arrow function
// for weight 
const KilogramsToPounds = (kilograms) => kilograms * 2.20462;
const PoundsToKilograms = (Pounds) => Pounds * 0.45359237;
// for distance
// for temperature
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
// Buttons for tabs
const weightTab = document.getElementById("weight-tab");
const distanceTab = document.getElementById("distance-tab");
const temperatureTab = document.getElementById("temperature-tab");
const weightPage = document.getElementById("weight-page");
const distancePage = document.getElementById("distance-page");
const temperaturePage = document.getElementById("temperature-page");
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
