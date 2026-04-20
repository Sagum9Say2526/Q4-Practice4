function garageGate () {
    let carCounter = 18;
    const maxCars = 25;

    while (carCounter < maxCars) {
        window.alert("Car No. " + carCounter + " is entering");
        carCounter += 1;
    }
    window.alert("The garage is full at " + carCounter + " cars!");
}
