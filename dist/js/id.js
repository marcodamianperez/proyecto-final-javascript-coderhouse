let defaultVehicles = publications.length;
let localStorageVehicles = 0;
if (localStorage.getItem("newPublicationsArray") !== null) {
    localStorageVehicles = JSON.parse(localStorage.getItem('newPublicationsArray')).length;

}
let id = defaultVehicles + localStorageVehicles + 1;