// Las propiedades comantadas serán implementadas en futuras versiones de la aplicación, ya que es muy tediosos ingresar todos estos valores por prompt().

class Vehiculo {
    constructor(tipo, marca, modelo, version, combustible, anio, kilometros, precio/*, permuta*/, ubicacion/*, fechaPublicacion, fechaEdicion, telefono, descripcion, disponible*/) {
        this.tipo = tipo;
        this.marca = marca.trim();
        this.modelo = modelo.trim();
        this.version = version.trim();
        this.combustible = combustible;
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
}