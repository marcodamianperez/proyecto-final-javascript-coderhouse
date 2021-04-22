class Publication {
    constructor(obj) {
        this.vehicleInfo = obj.vehicleInfo;
        this.sellerInfo = obj.sellerInfo;
        this.images = obj.images;
        this.exchange = obj.exchange;
        this.dates = obj.dates;
        this.highlighted = obj.highlighted;
        this.description = obj.description;
    }

    validatePrice() {
        if (obj.vehicleInfo.price === '' || obj.vehicleInfo.price === null) {
            this.vehicleInfo.price = 'A consultar';
        }
    }

    validateDescription() {
        if (obj.description === '' || obj.description === null) {
            this.description = 'Sin descripción.';
        }
    }
}