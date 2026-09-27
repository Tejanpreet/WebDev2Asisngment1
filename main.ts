// declaring all the mathematical equations in terms of arrow function

// for weight 
const KilogramsToPounds =(kilograms : number):number => kilograms * 2.20462 ;
const PoundsToKilograms = (Pounds : number) : number => Pounds * 0.45359237;

// for distance
const KilometersToMiles = (kilometers: number): number =>
  kilometers * 0.621371;

const MilesToKilometers = (miles: number): number =>
  miles * 1.609344;


// for temperature
const CelsiusToFahrenheit = (celsius: number): number =>
  (celsius * 9) / 5 + 32;

const FahrenheitToCelsius = (fahrenheit: number): number =>
  ((fahrenheit - 32) * 5) / 9;

const kgInput = document.getElementById("kg-input") as HTMLInputElement;
const poundInput = document.getElementById("pound-input") as HTMLInputElement;

  const handleKilogramsToPoundsConversion = ():void => {
  const Kilograms : number = Number(kgInput.value);
  const pounds :  number  =  KilogramsToPounds(Kilograms);
  poundInput.value = isNaN(pounds) ? '' : pounds.toFixed(2);
  }

  const handlePoundsToKilogramsConversion = ():void => {
  const pounds : number = Number(poundInput.value);
  const kilograms :  number  =  PoundsToKilograms(pounds);
  kgInput.value = isNaN(kilograms) ? '' : kilograms.toFixed(2);
  }


kgInput.addEventListener('input' , handleKilogramsToPoundsConversion);
poundInput.addEventListener('input' , handlePoundsToKilogramsConversion);

// Buttons for tabs
const weightTab = document.getElementById("weight-tab")!;
const distanceTab = document.getElementById("distance-tab")!;
const temperatureTab = document.getElementById("temperature-tab")!;

const weightPage = document.getElementById("weight-page")!;
const distancePage = document.getElementById("distance-page")!;
const temperaturePage = document.getElementById("temperature-page")!;

// Makes it easy to see what tab you're on
function setActiveTab(activeTab: HTMLElement) {
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
