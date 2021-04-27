const publicationContainer = document.getElementById('vehicle');

// obtengo el id de la publicación
const publicationId = localStorage.getItem('id');

const allPublications = publications.concat(JSON.parse(localStorage.getItem('newPublicationsArray')));

const currentPublication = allPublications.find(publication => publication.id == publicationId);

const generateDetailsHTML = () => {
    let html = `
        <div class="vehicle">
        <div class="vehicle__header">
            <h1 class="vehicle__brand-model">${currentPublication.vehicleInfo.brand} ${currentPublication.vehicleInfo.model}</h1>
            <h2 class="vehicle__version">${currentPublication.vehicleInfo.version}</h2>
            <div class="vehicle__price">$${currentPublication.vehicleInfo.price}</div>
        </div>
        <div class="vehicle__image">
            <img src="${currentPublication.images[0]}" alt="">
        </div>
        <div class="vehicle__details">
            <p class="section-title">Datos del vehículo</p>
            <div class="flex-container">
                <table>
                    <tr>
                        <td>Estado:</td>
                        <td class="right">${currentPublication.vehicleInfo.brandNew}</td>
                    </tr>
                    <tr>
                        <td>Año:</td>
                        <td class="right">${currentPublication.vehicleInfo.year}</td>
                    </tr>
                    <tr>
                        <td>Combustible:</td>
                        <td class="right">${currentPublication.vehicleInfo.fuel}</td>
                    </tr>
                    <tr>
                        <td>Kilometraje:</td>
                        <td class="right">${currentPublication.vehicleInfo.mileaje} Km</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Precio:</td>
                        <td class="right">$${currentPublication.vehicleInfo.price}</td>
                    </tr>
                    <tr>
                        <td>Transmisión:</td>
                        <td class="right">${currentPublication.vehicleInfo.transmission}</td>
                    </tr>
                    <tr>
                        <td>Fecha de publicación:</td>
                        <td class="right">${currentPublication.dates.publicationDate}</td>
                    </tr>
                    <tr>
                        <td>Permuta:</td>
                        <td class="right">${currentPublication.exchange}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="vehicle__details">
            <p class="section-title">Comentarios del vendedor</p>
            <p class="vehicle__comments">${currentPublication.description}</p>
        </div>
        <div class="vehicle__details">
            <p class="section-title">Contactá al vendedor</p>
            <p class="vehicle__seller">${currentPublication.sellerInfo.name}</p>
            <p class="vehicle__location">${currentPublication.sellerInfo.location.province}, ${currentPublication.sellerInfo.location.city}</p>
            <p class="vehicle__phone">${currentPublication.sellerInfo.phone}</p>
            <p class="vehicle__email">${currentPublication.sellerInfo.email}</p>
        </div>
    </div>
    `

    publicationContainer.innerHTML = html;

}

generateDetailsHTML();

$(document).ready(function () {
    $('body').fadeIn('slow');
});