class Publication {
    constructor(obj) {
        this.vehicleInfo = obj.vehicleInfo;
        this.validateYear(obj.vehicleInfo.year);
        this.validateMileaje(obj.vehicleInfo.mileaje);
        this.validatePrice(obj.vehicleInfo.price);
        this.validateState(obj.vehicleInfo.brandNew);
        this.sellerInfo = obj.sellerInfo;
        this.images = obj.images;
        this.validateExchange(obj.exchange);
        this.dates = obj.dates;
        this.highlighted = obj.highlighted;
        this.validateDescription(obj.description);
        this.id = obj.id;
    }

    validateYear(year) {
        if (year === '') {
            const today = new Date();
            this.vehicleInfo.year = today.getFullYear();
        } else {
            this.vehicleInfo.year = year;
        }
    }

    validateMileaje(mileaje) {
        if (mileaje === '') {
            this.vehicleInfo.mileaje = '0';
        } else {
            this.vehicleInfo.mileaje = mileaje;
        }
    }

    validatePrice(price) {
        if (price === '' || price === null) {
            this.vehicleInfo.price = 'A consultar';
        } else {
            this.vehicleInfo.price = price;
        }
    }

    validateDescription(description) {
        if (description === '' || description === null) {
            this.description = 'Sin descripción.';
        } else {
            this.description = description;
        }
    }

    validateState(state) {
        if (state) {
            this.vehicleInfo.brandNew = '0 km'
        } else {
            this.vehicleInfo.brandNew = 'Usado'
        }
    }

    validateExchange(exchange) {
        if (exchange) {
            this.exchange = 'Si'
        } else {
            this.exchange = 'No'
        }
    }
}