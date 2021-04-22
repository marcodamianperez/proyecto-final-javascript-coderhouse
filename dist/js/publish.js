const radioButtonsState = document.getElementsByName('state');
const yearInput = document.getElementById('year');
const mileajeInput = document.getElementById('mileaje');
const vehicleTypeSelect = document.getElementById('type');
const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const provinceSelect = document.getElementById('province');
const citySelect = document.getElementById('city');

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
            yearInput.parentElement.classList.add('hide');
            mileajeInput.parentElement.classList.add('hide');
        } else {
            yearInput.parentElement.classList.remove('hide');
            mileajeInput.parentElement.classList.remove('hide');
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

            vehicleTypeSelect.innerHTML += options;
        }
    });
}

// Se carga el select de marcas de acuerdo al tipo de vehículo seleccionado
$(vehicleTypeSelect).change(e => {
        currentJSON = e.target.value;

        const URL = `json/${e.target.value}.json`;
        $.getJSON(URL, (data, textStatus) => {
            if (textStatus === 'success') {
                let options = '<option value="selectType" hidden>Seleccione...</option>';
                data.forEach(brand => {
                    options += `<option value="${brand.id}">${brand.name}</option>`;
                });

                brandSelect.innerHTML = options;
            }
        });
});

// Se carga el select de modelos de vehículo de acuerdo a la marca seleccionada
$(brandSelect).change(e => {
    const URL = `json/${currentJSON}.json`;
    $.getJSON(URL, (data, textStatus) => {
            if (textStatus === 'success') {
                // Primero obtengo la marca seleccionada
                let vehicle = data.find(x => e.target.value === x.id);

                // Luego cargo en el select los modelos de la marca selecionada
                let options = '<option value="selectType" hidden>Seleccione...</option>';
                vehicle.models.forEach(model => {
                    options += `<option value="${model.id}">${model.name}</option>`;
                });
                
                modelSelect.innerHTML = options;
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
            
            provinceSelect.innerHTML += options;
        }
    });
}

// Se carga el select de ciudad de acuerdo a la provincia seleccionada
$(provinceSelect).change(e => {
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

        citySelect.innerHTML = options;
    });
});

$('#form').submit(e => { 
    e.preventDefault();
    const newVehicle = validateForm();

    if (errors.length === 0) {
        let newPublicationsArray = [];
    
        if (JSON.parse(localStorage.getItem('newPublicationsArray')) !== null) {
            newPublicationsArray = JSON.parse(localStorage.getItem('newPublicationsArray'));
        }
        
        newPublicationsArray.push(newVehicle);
        localStorage.setItem('newPublicationsArray', JSON.stringify(newPublicationsArray));
    } else {
        let errorsElement = document.getElementById('errors');
        errorsElement.innerHTML = '';

        errors.forEach(error => {
            errorsElement.innerHTML += `<p>${error}</p>`
        })

        errors = [];
    }
    
});