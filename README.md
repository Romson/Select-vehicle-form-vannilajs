# Planes, trains and automobiles

## The Traffic Meister application assignment

 - Create a form which behaves as follows
    - It will display the following drop down menus
      - A list of vehicle types
      - A list of vehicle brands
      - A list of vehicle brand colors
    - All three lists are enabled when data is available.
    - When selecting an option in on of the list, the other lists are filtered accordingly.
    - At the bottom of the form all selections will be shown.
  - Use the framework based on the vacancy you're applying for. So if you applied to an Angular vacancy, use Angular. The same goes for React, VueJS, etc.
  - Except the framework restriction above, you are free to use any tool and/or framework you like. We do encourage you to remain critical when you include an additional dependency. Is this dependency really needed/useful? As long as it runs inside a browser and you can explain why that solution is the most favorable.
  - You are allowed/encouraged to design your own layout.
  - Your implementation should be
      - tested
      - visually attractive
      - deployable

### For example.
1. When yellow is selected all types and brands that have no yellow vehicles are filtered out
2. When selecting "Bugatti Veyron", only the car type and the available colors are selectable

## Data library

The data are provided by a small service you can find in the `service` folder.

This service can be accessed by a the global variable `trafficMeister` and provide a single method `fetchData`.

```
trafficMeister.fetchData(callBack);
```

The callback is called with the full data list as first parameter.

```
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});
```

The data library can be used as a node module.

```
var trafficMeister = require('traffic-meister');
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});
```
