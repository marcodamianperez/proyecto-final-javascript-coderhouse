class Publication {
    constructor(vehicleInfo, sellerInfo, images, exchange, dates, highlighted, description) {
        this.vehicleInfo = vehicleInfo; // {type: 'car', brand: 'fiat', model: 'palio', version: '1.8 HLX', fuel: 'nafta', year: 2004, transmission: 'manual', mileaje: 162000, price: 420000, brandNew: false}
        this.sellerInfo = sellerInfo; // {name: 'Martín Cáseres', phone: '+549254982101', email: 'martincaseres@gmail.com', location: {province: 'Mendoza', city: 'Guaymallén', street: 'Paso de los Andes 721'}}
        this.images = images; // [image1, image2, image3, ...]
        this.exchange = exchange;
        this.dates = dates; // {publicationDate: '25/01/2021', lastEditDate: '07/02/2021'}
        this.highlighted = highlighted;
        this.description = description;
    }
}

class Vehicle {
    constructor(type, brands) {
        this.type = type; // car, pickup or motorcycle
        this.brands = brands; // {fiat: [palio]}
    }
}