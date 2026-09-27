// declaring all the mathematical equations in terms of arrow function

// for weight 
const KilogramsToPounds =(kilograms : number):number => kilograms * 2.20462 ;
const PoundsToKilograms = (Pounds : number) : number => Pounds * 0.45359237;

// for distance


// for temperature


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
