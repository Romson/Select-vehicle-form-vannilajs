import { data as vehicle } from "./data.js";

let typeChosen, vehicleTypeArray, brandChosen, brandArray;
const selectVehicle = document.getElementById("selectVehicle"),
  selectVehicleBrand = document.getElementById("selectBrand"),
  selectVehicleColor = document.getElementById("selectColor"),
  newArr = vehicle.map(vehicle => vehicle.type),
  uniqueArr = newArr.filter((item, index) => {
    return newArr.indexOf(item) === index;
  });

// Show vehicles
for (let i = 0; i < uniqueArr.length; i++) {
  let opt = uniqueArr[i];
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  selectVehicle.appendChild(el);
}

// Show brands
function showBrands(arr) {
  for (let i = 0; i < arr.length; i++) {
    let opt = arr[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectVehicleBrand.appendChild(el);
  }
}

// Show colors
function showColors(arr) {
  for (let i = 0; i < arr[0].length; i++) {
    let opt = arr[0][i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectVehicleColor.appendChild(el);
  }
}

// EVENTLISTENER for vehicle TYPE
selectVehicle.addEventListener("change", e => {
  typeChosen = e.target.value;

  // Type array and filtered brands
  vehicleTypeArray = vehicle.filter(vehicle => vehicle.type === typeChosen);
  const filteredBrands = vehicleTypeArray.map(vehicle => vehicle.brand);

  selectBrand.options.length = 1;
  showBrands(filteredBrands);
});

//  EVENTLISTENER for vehicle BRANDS
selectBrand.addEventListener("change", e => {
  brandChosen = e.target.value;

  // Get single brand array to filter colors
  brandArray = vehicleTypeArray.filter(
    vehicle => vehicle.brand === brandChosen
  );
  const filteredColors = brandArray.map(brand => brand.colors);

  showVehicle.innerHTML = `<img src="${brandArray[0].img}" alt="" width="100%" />`;

  selectColor.options.length = 1;
  showColors(filteredColors);
});
