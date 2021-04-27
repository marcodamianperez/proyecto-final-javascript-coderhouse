let errors = [];

const validateForm = () => {
    // primero obtengo todos los datos del formulario
    const type = vehicleTypeSelect.value;
    const brand = brandSelect.options[brandSelect.selectedIndex].text;
    const model = modelSelect.options[modelSelect.selectedIndex].text;
    const version = document.getElementById('version').value.trim();
    const fuel = document.getElementById('fuel').value;
    const year = yearInput.value.trim();
    let transmission = null;
    document.getElementsByName('transmission').forEach(element => {
        if(element.checked) {
            transmission = element.value;
        }
    });
    const mileaje = document.getElementById('mileaje').value.trim();
    const price = document.getElementById('price').value.trim();
    let state = null;
    radioButtonsState.forEach(element => {
        if(element.checked) {
            state = element.value;
        }
    });
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const province = provinceSelect.options[provinceSelect.selectedIndex].text;
    const city = citySelect.options[citySelect.selectedIndex].text;
    const street = document.getElementById('street').value.trim();
    const image = 'img/default-vehicle.jpg';
    const exchange = document.getElementById('exchange').checked;
    const publicationDate = (new Date()).toLocaleDateString();
    const lastEditDate = (new Date()).toLocaleDateString();
    const highlighted = false;
    const description = document.getElementById('description').value.trim();

    if (state === null) {
        errors.push('Seleccione estado del vehículo (nuevo/usado)');
    }

    if (type === 'selectType') {
        errors.push('Seleccione tipo de vehículo');
    }

    if (brand === 'Seleccione...') {
        errors.push('Seleccione marca del vehículo');
    }

    if (model === 'Seleccione...') {
        errors.push('Seleccione modelo del vehículo');
    }

    if (version === '') {
        errors.push('Ingrese versión del vehículo');
    }

    if (transmission === null) {
        errors.push('Seleccione tipo de transmisión')
    }

    if (fuel === 'selectType') {
        errors.push('Seleccione tipo de combustible');
    }

    if (state === 'used' && year.length !== 4 || isNaN(year)) {
        errors.push('Ingrese año del vehículo');
    }

    if (state === 'used' && mileaje === '') {
        errors.push('Ingrese kilometraje');
    }

    if (price === '0') {
        errors.push('Ingrese precio');
    }

    if (name === '') {
        errors.push('Ingrese nombre');
    }

    if (street === '') {
        errors.push('Ingrese dirección');
    }

    if (province === 'Seleccione...') {
        errors.push('Seleccione provincia');
    }

    if (city === 'Seleccione...') {
        errors.push('Seleccione ciudad');
    }

    if (phone === '') {
        errors.push('Ingrese teléfono');
    }

    if (email === '') {
        errors.push('Ingrese email');
    }

    // Con los datos del formulario construyo un nuevo objeto
    const newVehicle = new Publication(
        {
            vehicleInfo: {
                type: type,
                brand: brand,
                model: model,
                version: version,
                fuel: fuel,
                year: year,
                transmission: transmission,
                mileaje: mileaje,
                price: price,
                brandNew: state
            },
            sellerInfo: {
                name: name,
                phone: phone,
                email: email,
                location: {
                    province: province,
                    city: city,
                    street: street
                }
            },
            images: [image],
            exchange: exchange,
            dates: {
                publicationDate: publicationDate,
                lastEditDate: lastEditDate
            },
            highlighted: highlighted,
            description: description,
            id: id++
        }
    );

    return newVehicle;
}