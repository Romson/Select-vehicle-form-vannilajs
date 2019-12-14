import { data as vehicle } from "./data.js";

const newArr = vehicle.map(vehicle => vehicle.type),
  uniqueArr = newArr.filter((item, index) => {
    return newArr.indexOf(item) === index;
  });

let vehicleData = {
  typeChosen: "",
  brandChosen: "",
  colorChosen: "",
  vehicleTypeArray: [],
  brandArray: []
};

const data = {
  showVehicle() {
    for (let i = 0; i < uniqueArr.length; i++) {
      let opt = uniqueArr[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      selectVehicle.appendChild(el);
    }
  },
  showBrands(arr) {
    for (let i = 0; i < arr.length; i++) {
      let opt = arr[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      selectBrand.appendChild(el);
    }
  },
  showColors(arr) {
    for (let i = 0; i < arr[0].length; i++) {
      let opt = arr[0][i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      selectColor.appendChild(el);
    }
  },
  selection() {
    return `A ${vehicleData.colorChosen} <span class="vehicle"><strong>${vehicleData.brandChosen}</strong></span>. GREAT pick!`;
  }
};

data.showVehicle();

selectVehicle.addEventListener("change", e => {
  selected.innerHTML = "";
  vehicleData.typeChosen = e.target.value;
  vehicleData.vehicleTypeArray = vehicle.filter(
    vehicle => vehicle.type === vehicleData.typeChosen
  );
  const filteredBrands = vehicleData.vehicleTypeArray.map(
    vehicle => vehicle.brand
  );
  selectBrand.options.length = 1;
  data.showBrands(filteredBrands);
});

selectBrand.addEventListener("change", e => {
  selected.innerHTML = "";
  vehicleData.brandChosen = e.target.value;
  vehicleData.brandArray = vehicleData.vehicleTypeArray.filter(
    vehicle => vehicle.brand === vehicleData.brandChosen
  );
  const filteredColors = vehicleData.brandArray.map(brand => brand.colors);
  showVehicle.innerHTML = `<img src="${vehicleData.brandArray[0].img}" alt="" width="100%" />`;
  selectColor.options.length = 1;
  data.showColors(filteredColors);
});

selectColor.addEventListener("change", e => {
  vehicleData.colorChosen = e.target.value;
  selected.innerHTML = data.selection();
});
