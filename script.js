const vehicle = [
    {
        id: 1,
        type: 'Car',
        brand: 'Bugatti Veyron',
        colors: ['red', 'black'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
      },
      {
        id: 2,
        type: 'Airplane',
        brand: 'Boeing 787 Dreamliner',
        colors: ['red', 'white', 'black', 'green'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg'
      },
      {
        id: 3,
        type: 'Train',
        brand: 'USRA 0-6-6',
        colors: ['yellow', 'white', 'black'],
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/UP_4466_Neil916.JPG/600px-UP_4466_Neil916.JPG'
      },
      {
        id: 4,
        type: 'Airplane',
        brand: 'Canadair North Star',
        colors: ['red', 'blue', 'yellow', 'green'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BOAC_C-4_Argonaut_Heathrow_1954.jpg/600px-BOAC_C-4_Argonaut_Heathrow_1954.jpg'
      },
      {
        id: 5,
        type: 'Airplane',
        brand: 'Airbus A400M Atlas',
        colors: ['red', 'white'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/A400M-1969.jpg/600px-A400M-1969.jpg'
      },
      {
        id: 6,
        type: 'Airplane',
        brand: 'Bloch MB.131',
        colors: ['yellow', 'blue', 'brown'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Bloch_MB_131_San_Diego_Air_%26_Space_Museum_3.jpg'
      },
      {
        id: 7,
        type: 'Train',
        brand: 'Prairie 2-6-2',
        colors: ['red', 'white', 'grey'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/CFR_Steam_locomotive.jpg/600px-CFR_Steam_locomotive.jpg'
      },
      {
        id: 8,
        type: 'Train',
        brand: 'EMD GP40',
        colors: ['black', 'grey', 'white'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/EMD_GP40_B%26M_339_Wells_Maine.jpg/600px-EMD_GP40_B%26M_339_Wells_Maine.jpg'
      },
      {
        id: 9,
        type: 'Train',
        brand: 'Amer 4-4-0',
        colors: ['red', 'black'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/440woodcut.jpg/600px-440woodcut.jpg'
      },
      {
        id: 10,
        type: 'Car',
        brand: 'Ferrari F40',
        colors: ['red', 'yellow'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/F40_Ferrari_20090509.jpg/1920px-F40_Ferrari_20090509.jpg'
      },
      {
        id: 11,
        type: 'Car',
        brand: 'Lamborghini Huracán',
        colors: ['black', 'white'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2014-03-04_Geneva_Motor_Show_1379.JPG/440px-2014-03-04_Geneva_Motor_Show_1379.JPG'
      },
      {
        id: 12,
        type: 'Car',
        brand: 'Porsche Carrera GT',
        colors: ['green', 'yellow'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/440px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg'
      }
];



// Function to remove options in dropdown
const removeBrands = (inputField) => {
  for (let i = 0; i < inputField.length; i++) {
    inputField.remove(i);
  }
}

const selectVehicle = document.getElementById('selectVehicle');
const newArr = vehicle.map((vehicle) => vehicle.type); // New array for vehicle types
// Filter new array for duplicate vehicle types
const uniqueArr = newArr.filter((item, index) => {
  return newArr.indexOf(item) >=index;
});

// Options to select for vehicle types
for (let i = 0; i < uniqueArr.length; i++) {
  let opt = uniqueArr[i];
  let el = document.createElement('option');
  el.textContent = opt;
  el.value = opt;
  selectVehicle.appendChild(el);
};

// EVENTLISTENER for vehicle TYPE
let typeChosen;
let vehicleTypeArray;
const selectVehicleBrand = document.getElementById('selectBrand'); 

selectVehicle.addEventListener('change', (e) => {

  typeChosen = e.target.value;

  // New array of objects returned for type chosen
  vehicleTypeArray = vehicle.filter((vehicle) => vehicle.type === e.target.value);

  // New filtered array for vehicle brands to use in select brand options box
  const filteredBrands = vehicleTypeArray.map((vehicle) => vehicle.brand);

  for (let i = 0; i < filteredBrands.length; i++) {
    let opt = filteredBrands[i];
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    selectVehicleBrand.appendChild(el);
  };

  console.log(typeChosen);
  console.log(vehicleTypeArray)
  console.log(filteredBrands);

});


//  EVENTLISTENER for vehicle BRANDS
let brandChosen; // for input value
let brandArray; // for new array based on input value
const selectVehicleColor = document.getElementById('selectColor');

selectBrand.addEventListener('change', (e) => {
  
  brandChosen = e.target.value;
  
  // Get single brand array to filter colors field 
  brandArray = vehicleTypeArray.filter((vehicle) => vehicle.brand === e.target.value);

  // New array for colors
  const filteredColors = brandArray.map((brand) => brand.colors);

  let newline = '<br>';
  for (let i = 0; i < filteredColors[0].length; i++) {
    let opt = filteredColors[0][i];
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    selectVehicleColor.appendChild(el);
  };

  console.log(brandChosen);
  console.log(brandArray); // Filtered array based on brand selection to use for colors
  console.log(filteredColors); // New array of colors based on brand selection

});


// Filter brand and colors based on vehicle type selection


// Return array[index].img