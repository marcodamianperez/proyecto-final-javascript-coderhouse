// VARIABLES GLOBALES
const type = localStorage.getItem('type');
const selectBrand = document.getElementById('brand');
const selectModel = document.getElementById('model');
const selectFuel = document.getElementById('fuel');

// publicaciones por defecto para que la app no esté vacía al inicio
const defaultPublications = publications.filter(publication => publication.vehicleInfo.type === type);

// publicaciones que realiza el usuario y se guardan en local storage
let localStoragePublications = null;
if (JSON.parse(localStorage.getItem('newPublicationsArray')) !== null) {
    localStoragePublications = JSON.parse(localStorage.getItem('newPublicationsArray')).filter(publication => publication.vehicleInfo.type === type);
}

// si no hay publicaciones del usuario trabajo sólo con las por defecto, caso contrario uno ambos arrays y trabajo con todas las publicaciones
let currentPublications = [];
if (localStoragePublications === null) {
    currentPublications = defaultPublications.filter(publication => publication.vehicleInfo.type === type);
} else {
    const allPublications = defaultPublications.concat(localStoragePublications);
    currentPublications = allPublications.filter(publication => publication.vehicleInfo.type === type);
}

let filteredPublications = currentPublications;

// Función que genera el html que se va a insertar dinámicamente en la página search.html
let generateHtml = (filteredPublications = currentPublications) => {
    let html = '';
    for (const publication of filteredPublications) {
        html += `   <div class="car">
                        <div class="car__image">
                            <img src="${publication.images[0]}" alt="auto">
                        </div>
                        <div class="car__description">
                            <div class="car__info">
                                <span class="car__brand">${publication.vehicleInfo.brand}</span>
                                <span class="car__model">${publication.vehicleInfo.model}</span>
                                <div class="car__version">${publication.vehicleInfo.version}</div>
                                <div class="car__millage">${publication.vehicleInfo.mileaje} Km</div>
                                <div class="car__location">${publication.sellerInfo.location.city}, ${publication.sellerInfo.location.province}</div>
                            </div>
                            <div class="car__data">
                                <div class="car__price">$ ${publication.vehicleInfo.price}</div>
                                <span class="car__fuel">${publication.vehicleInfo.fuel}</span> | <span class="car__year">${publication.vehicleInfo.year}</span>
                            </div>
                            <a href="details.html" class="btn btn--details details" id="${publication.id}">
                                Ver publicación
                            </a>
                        </div>
                </div>
        `;
    }
    return html;
}

// Función que genera dinámicamente el select con las marcas de los vehículos en función de la disponibilidad de los mismos publicados
let generateSelectBrand = () => {
    let brands = [];
    currentPublications.forEach(publication => {
        brands.push(publication.vehicleInfo.brand);
    });
    brands = Array.from(new Set(brands));

    let options = '';
    brands.forEach(brand => {
        options += `<option value="${brand}">${brand}</option>`;
    });

    selectBrand.innerHTML += options;
}

let generateSelectModel = filteredPublications => {
    selectModel.innerHTML = null;
    let models = [];
    filteredPublications.forEach(publication => {
        models.push(publication.vehicleInfo.model);
    });
    models = Array.from(new Set(models));

    let options = '<option value="all">Mostrar todos</option>';
    models.forEach(model => {
        options += `<option value="${model}">${model}</option>`;
    });

    selectModel.innerHTML += options;
}

// Función que muestra el listado de vehículos disponibles, según lo que el usuario eligió ver (autos, utilitarios o motos)
let showPublications  = () => {
    const html = generateHtml();    
    $('#showcase').html(html);
}

const filterByBrand = () => {
    const brand = selectBrand.value;
    filteredPublications = currentPublications.filter(publication => publication.vehicleInfo.brand === brand);

    if (brand === 'all') {
        showPublications();
        selectFuel.setAttribute('disabled', 'true')
    } else {
        const html = generateHtml(filteredPublications);
        $('#showcase').html(html);
        if (selectFuel.hasAttribute('disabled')) {
            selectFuel.removeAttribute('disabled')
        }
    }

    generateSelectModel(filteredPublications);
}

const filterByModel = () => {
    const brand = selectBrand.value;
    const model = selectModel.value;

    const filteredByBrand = currentPublications.filter(publication => publication.vehicleInfo.brand === brand);
    filteredPublications = filteredByBrand.filter(publication => publication.vehicleInfo.model === model);

    if (model === 'all') {
        const html = generateHtml(filteredByBrand);
        $('#showcase').html(html);
    } else {
        const html = generateHtml(filteredPublications);
        $('#showcase').html(html);
    }
}

const filterByFuel = () => {
    const fuel = selectFuel.value;
    const filteredByFuel = filteredPublications.filter(publication => publication.vehicleInfo.fuel === fuel);

    if (fuel === 'all') {
        const html = generateHtml(filteredPublications);
        $('#showcase').html(html);
    } else {
        const html = generateHtml(filteredByFuel);
        $('#showcase').html(html);
    }
}

// LISTENERS
selectBrand.addEventListener('change', filterByBrand);
selectModel.addEventListener('change', filterByModel);
selectFuel.addEventListener('change', filterByFuel);

$(document).ready(function () {
    generateSelectBrand();
    showPublications();
});

const showcase = document.getElementById('showcase');
showcase.addEventListener('click', e => {
    if (e.target.classList.contains('details')) {
        localStorage.setItem('id', e.target.id);
    }
});