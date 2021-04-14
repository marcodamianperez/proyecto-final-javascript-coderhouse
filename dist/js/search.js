// VARIABLES GLOBALES
const type = localStorage.getItem('type');
const select = document.getElementById('brand');
const currentPublications = publications.filter(publication => publication.vehicleInfo.type === type);

// Función que genera el html que se va a insertar dinámicamente en la página search.html
let generateHtml = (filteredPublications = currentPublications) => {
    let html = '';
    for (const publication of filteredPublications) {
        html += `
                <div class="car">
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
                    </div>
                </div>
        `
    }
    return html;
}

// Función que genera dinámicamente el select con las marcas de los vehículos en función de la disponibilidad de los mismos publicados
let generateSelect = () => {
    let brands = [];
    currentPublications.forEach(publication => {
        brands.push(publication.vehicleInfo.brand);
    });
    brands = Array.from(new Set(brands));

    let options = '';
    brands.forEach(brand => {
        options += `<option value="${brand}">${brand}</option>`;
    });

    select.innerHTML += options;
}

// Función que muestra el listado de vehículos disponibles, según lo que el usuario eligió ver (auto, utilitario o moto)
let showPublications  = () => {
    const html = generateHtml();

    //const showcase = document.getElementById('showcase');
    //showcase.innerHTML = html;
    
    $('#showcase').html(html);
}

const filterByBrand = () => {
    const brand = select.value;
    const filteredPublications = currentPublications.filter(publication => publication.vehicleInfo.brand === brand);

    if (brand === 'all') {
        showPublications();
    } else {
        const html = generateHtml(filteredPublications);
    
        // const showcase = document.getElementById('showcase');
        // showcase.innerHTML = html;

        $('#showcase').html(html);
    }

}

// LISTENERS
select.addEventListener('change', filterByBrand);

$(document).ready(function () {
    generateSelect();
    showPublications();
});