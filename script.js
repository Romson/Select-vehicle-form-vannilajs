import { data as vehicle } from "./data.js";

const newArr = vehicle.map(vehicle => vehicle.type),
  uniqueArr = newArr.filter((item, index) => {
    return newArr.indexOf(item) === index;
  }),
  data = {
    typeChosen: "",
    brandChosen: "",
    colorChosen: "",
    vehicleTypeArray: [],
    brandArray: [],
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
      return `A ${data.colorChosen} <span class="vehicle"><strong>${data.brandChosen}</strong></span>. GREAT pick!`;
    }
  };

data.showVehicle();

selectVehicle.addEventListener("change", e => {
  selected.innerHTML = "";
  data.typeChosen = e.target.value;
  data.vehicleTypeArray = vehicle.filter(
    vehicle => vehicle.type === data.typeChosen
  );
  const filteredBrands = data.vehicleTypeArray.map(vehicle => vehicle.brand);
  selectBrand.options.length = 1;
  data.showBrands(filteredBrands);
});

selectBrand.addEventListener("change", e => {
  selected.innerHTML = "";
  data.brandChosen = e.target.value;
  data.brandArray = data.vehicleTypeArray.filter(
    vehicle => vehicle.brand === data.brandChosen
  );
  const filteredColors = data.brandArray.map(brand => brand.colors);
  showVehicle.innerHTML = `<img src="${data.brandArray[0].img}" alt="" width="100%" />`;
  selectColor.options.length = 1;
  data.showColors(filteredColors);
});

selectColor.addEventListener("change", e => {
  data.colorChosen = e.target.value;
  selected.innerHTML = data.selection();
});
