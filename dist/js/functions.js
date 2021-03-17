// VARIABLES GLOBALES
const type = localStorage.getItem('type');
const select = document.getElementById('brand');
const vehicles = listaVehiculos.filter(vehicle => vehicle.tipo === type); // Array de vehículos que seleccionó el usuario

// Funcion que permite publicar un nuevo vehículo
// let publicar = () => {
//     let tipo;
//     tipo = parseInt(prompt('Ingrese tipo de vehículo:\n\n[1] Auto\n[2] Utilitario\n[3] Moto'));
//     switch (tipo) {
//         case 1:
//             tipo = 'auto';
//             break;
//         case 2:
//             tipo = 'utilitario';
//             break;
//         case 3:
//             tipo = 'moto';
//             break;
//         default:
//             break;
//     }
//     let marca = prompt('Ingrese marca del vehículo');
//     let modelo = prompt('Ingrese modelo del vehículo');
//     let version = prompt('Ingrese versión');
//     let combustible = parseInt(prompt('Indique tipo de combustible\n[1] Nafta\n[2] Diesel\n[3] GNC\n[4] Eléctrico\n[5] Híbrido'));
//     let anio = parseInt(prompt('Ingrese año'));
//     let kilometros = parseInt(prompt('Ingrese kilometraje'));
//     let precio = prompt('Ingrese precio');
//     let ubicacion = prompt('Ingrese su ubicación');

//     const v = new Vehiculo(tipo, marca, modelo, version, combustible, anio, kilometros, precio, ubicacion);
//     switch (v.tipo) {
//         case 'auto':
//             listaAutos.push(v);
//             break;
//         case 'utilitario':
//             listaUtilitarios.push(v);
//             break;
//         case 'moto':
//             listaMotos.push(v);
//             break;
//         default:
//             break;
//     }
// }

// Función que genera el html que se va a insertar dinámicamente en la página search.html
let generarHtml = listaVehiculos => {
    let html = '';
    for (const vehiculo of listaVehiculos) {
        html += `
                <div class="car">
                    <div class="car__image">
                        <img src="img/206.jpg" alt="auto">
                    </div>
                    <div class="car__description">
                        <div class="car__info">
                            <span class="car__brand">${vehiculo.marca}</span>
                            <span class="car__model">${vehiculo.modelo}</span>
                            <div class="car__version">${vehiculo.version}</div>
                            <div class="car__millage">${vehiculo.kilometros} Km</div>
                            <div class="car__location">${vehiculo.ubicacion}</div>
                        </div>
                        <div class="car__data">
                            <div class="car__price">$ ${vehiculo.precio}</div>
                            <span class="car__fuel">${vehiculo.combustible}</span> | <span class="car__year">${vehiculo.anio}</span>
                        </div>
                    </div>
                </div>
        `
    }
    return html;
}

// Función que genera dinámicamente el select con las marcas de los vehículos en función de la disponibilidad de los mismos publicados
let generateSelect = () => {
    let brands = [];
    vehicles.forEach(vehicle => {
        brands.push(vehicle.marca);
    });
    brands = Array.from(new Set(brands));

    let options = '';
    brands.forEach(option => {
        options += `<option value="${option}">${option}</option>`;
    });

    select.innerHTML += options;
}

// Función que muestra el listado de vehículos disponibles, según lo que el usuario eligió ver (auto, utilitario o moto)
let verListado = () => {
    let html = generarHtml(vehicles);

    const showcase = document.getElementById('showcase');
    showcase.innerHTML = html;
}

const filterByBrand = () => {
    const marca = select.value;
    let listaFiltrada = vehicles.filter(vehiculo => vehiculo.marca === marca);

    const showcase = document.getElementById('showcase');
    const html = generarHtml(listaFiltrada);
    showcase.innerHTML = html;
}

// LISTENERS
select.addEventListener('change', filterByBrand);

generateSelect();
verListado();