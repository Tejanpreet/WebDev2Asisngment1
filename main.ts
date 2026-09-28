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

// Higher-order conversion function
const createConverter = (
  fromUnit: string,
  toUnit: string
): ((value: number) => number) => {

  if (fromUnit === "kg" && toUnit === "lb") {
    return (value: number) => value * 2.20462;
  }

  if (fromUnit === "lb" && toUnit === "kg") {
    return (value: number) => value * 0.45359237;
  }

  if (fromUnit === "km" && toUnit === "mi") {
    return (value: number) => value * 0.621371;
  }

  if (fromUnit === "mi" && toUnit === "km") {
    return (value: number) => value * 1.609344;
  }

  if (fromUnit === "c" && toUnit === "f") {
    return (value: number) => (value * 9) / 5 + 32;
  }

  if (fromUnit === "f" && toUnit === "c") {
    return (value: number) => ((value - 32) * 5) / 9;
  }

  return (value: number) => value;
};


// Converts either a single value or an array of values
const convertValues = (
  converter: (value: number) => number,
  values: number | number[]
): number | number[] => {

  if (Array.isArray(values)) {
    return values.map(converter);
  }

  return converter(values);
};

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

// Distance conversion
const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const kilometersInput = document.getElementById("kilometers-input") as HTMLInputElement;

const handleMilesToKilometersConversion = (): void => {
  const miles: number = Number(milesInput.value);
  const kilometers: number = MilesToKilometers(miles);

  kilometersInput.value = isNaN(kilometers) ? '' : kilometers.toFixed(2);
};

const handleKilometersToMilesConversion = (): void => {
  const kilometers: number = Number(kilometersInput.value);
  const miles: number = KilometersToMiles(kilometers);

  milesInput.value = isNaN(miles) ? '' : miles.toFixed(2);
};

milesInput.addEventListener('input', handleMilesToKilometersConversion);
kilometersInput.addEventListener('input', handleKilometersToMilesConversion);  

// Temperature conversion
const celsiusInput =
  document.getElementById("celsius-input") as HTMLInputElement;

const farenheitInput =
  document.getElementById("farenheit-input") as HTMLInputElement;

const handleCelsiusToFarenheitConversion = (): void => {
  const celsius: number = Number(celsiusInput.value);
  const farenheit: number = CelsiusToFahrenheit(celsius);

  farenheitInput.value =
    isNaN(farenheit) ? '' : farenheit.toFixed(2);
};

const handleFarenheitToCelsiusConversion = (): void => {
  const farenheit: number = Number(farenheitInput.value);
  const celsius: number = FahrenheitToCelsius(farenheit);

  celsiusInput.value =
    isNaN(celsius) ? '' : celsius.toFixed(2);
};

celsiusInput.addEventListener(
  'input',
  handleCelsiusToFarenheitConversion
);

farenheitInput.addEventListener(
  'input',
  handleFarenheitToCelsiusConversion
);

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
