// object properties
const vehicleInfo = {
    type: '',
    model: '', 
    version: '', 
    fuel: '', 
    year: '', 
    transmission: '', 
    mileaje: '', 
    price: '', 
    brandNew: ''
}

const sellerInfo = {
    name: '',
    phone: '',
    email: '',
    location: {
        province: '',
        city: '',
        street: ''
    }
}

let images = 'img/punto.jpg';
let exchange;

let dates = {
    publicationDate: '',
    lastEditDate: ''
}

let highlighted;
let description;

const currentPublication = new Publication({
    vehicleInfo, sellerInfo, images, exchange, dates, highlighted, description
});

const radioButtonsState = document.getElementsByName('state');
const year = document.getElementById('year');
let brandNew = null;
const mileaje = document.getElementById('mileaje');
const vehicleType = document.getElementById('type');
const brand = document.getElementById('brand');
const model = document.getElementById('model');
const selectProvince = document.getElementById('province');
const selectCity = document.getElementById('city');

let currentJSON = '';

// Al cargar la página se cargan los tipos de vehículos y las provincias
$(document).ready(() => {
    getVehicleType();
    getProvinces();
});

// Si el vehículo es 0Km oculto los campos para completar el año y el kilometraje
radioButtonsState.forEach(element => {
    element.addEventListener('change', () => {
        if (element.id === 'new') {
            year.parentElement.classList.add('hide');
            mileaje.parentElement.classList.add('hide');
            currentPublication.vehicleInfo.brandNew = true
        } else {
            year.parentElement.classList.remove('hide');
            mileaje.parentElement.classList.remove('hide');
            currentPublication.vehicleInfo.brandNew = false;
        }
    });
});

// Se carga el select con los tipos de vehículo disponible (auto, utilitario, moto, etc.)
const getVehicleType = () => {
    const URL = 'json/vehicleType.json';
    $.getJSON(URL, (data, textStatus) => {
        if (textStatus === 'success') {
            let options = '';
            data.forEach(vehicleType => {
                let type;
                switch (vehicleType.type) {
                    case 'Cars':
                        type = 'Auto';
                        break;
                    case 'Pickups':
                        type = 'Utilitario';
                        break;
                    case 'Motorcycles':
                        type = 'Moto';
                        break;
                    default:
                        break;
                }
                options += `<option value="${vehicleType.type}">${type}</option>`;
            });

            vehicleType.innerHTML += options;
        }
    });
}

// Se carga el select de marcas de acuerdo al tipo de vehículo seleccionado
$(vehicleType).change(e => {
        currentJSON = e.target.value;

        const URL = `json/${e.target.value}.json`;
        $.getJSON(URL, (data, textStatus) => {
            if (textStatus === 'success') {
                let options = '<option value="selectType" hidden>Seleccione...</option>';
                data.forEach(brand => {
                    options += `<option value="${brand.id}">${brand.name}</option>`;
                });

                brand.innerHTML = options;
            }
        });
});

// Se carga el select de modelos de vehículo de acuerdo a la marca seleccionada
$(brand).change(e => {
    const URL = `json/${currentJSON}.json`;
    $.getJSON(URL, (data, textStatus) => {
            if (textStatus = 'success') {
                // Primero obtengo la marca seleccionada
                let vehicle = data.find(x => e.target.value === x.id);

                // Luego cargo en el select los modelos de la marca selecionada
                let options = '<option value="selectType" hidden>Seleccione...</option>';
                vehicle.models.forEach(model => {
                    options += `<option value="${model.id}">${model.name}</option>`;
                });
                
                model.innerHTML = options;
            }
        }
    );
});

// Se carga el select de provincias
const getProvinces = () => {
    const URL = 'https://apis.datos.gob.ar/georef/api/provincias';
    $.getJSON(URL, (data, textStatus) => {
        if (textStatus === 'success') {
            let provinces = data.provincias;
            let options = '';
            provinces.forEach(province => {
                options += `<option value="${province.id}">${province.nombre}</option>`;
            });

            selectProvince.innerHTML += options;
        }
    });
}

// se carga el select de ciudad de acuerdo a la provincia seleccionada
$(selectProvince).change(e => {
    let URL = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${e.target.value}&campos=id,nombre`;
    $.getJSON(URL, (data, textStatus) => {
        let cities = data.municipios;
        let options = '<option value="selectType" hidden>Seleccione...</option>';
        if (cities.length > 0) {
            cities.forEach(city => {
                options += `<option value="${city.id}">${city.nombre}</option>`;
            });
        } else {
            options += `<option value="error" disabled>No se encontraron ciudades</option>`;
        }

        selectCity.innerHTML = options;
    });
});