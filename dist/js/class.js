// Las propiedades comantadas serán implementadas en futuras versiones de la aplicación, ya que es muy tediosos ingresar todos estos valores por prompt().

class Vehiculo {
    constructor(tipo, marca, modelo, version, combustible, anio, kilometros, precio/*, permuta*/, ubicacion/*, fechaPublicacion, fechaEdicion, telefono, descripcion, disponible*/) {
        this.tipo = tipo;
        this.marca = marca.trim();
        this.modelo = modelo.trim();
        this.version = version.trim();
        this.validarCombustible(combustible)
        this.anio = anio;
        this.kilometros = kilometros;
        this.validarPrecio(precio.trim());
        // this.permuta = permuta;
        this.ubicacion = ubicacion.trim();
        // this.fechaPublicacion = fechaPublicacion;
        // this.fechaEdicion = fechaEdicion;
        // this.telefono = telefono;
        // this.descripcion = descripcion;
        // this.disponible = disponible;
    }

    validarPrecio(precio) {
        if (precio === '' || precio === ' ') {
            this.precio = 'Consultar';
        } else {
            this.precio = precio;
        }
    }

    validarCombustible(combustible) {
        switch (combustible) {
            case 1:
                this.combustible = 'nafta';
                break;
            case 2:
                this.combustible = 'diesel';
                break;
            case 3:
                this.combustible = 'gnc';
                break;
            case 4:
                this.combustible = 'eléctrico';
                break;
            case 5:
                this.combustible = 'híbrido';
                break;
            default:
                this.combustible = 'otro';
                break;
        }
    }
}