/*
Nombre del proyecto: AutoTrade

AutoTrade es una aplicación web de compra-venta de autos en donde el usuario puede publicar su propio auto a vender así como también buscar entre los autos publicados y filtrarlos por marca, modelo, año, precio, etc.
*/

// Funcion que permite publicar un nuevo vehículo
let publicar = () => {
    let tipo;
    tipo = parseInt(prompt('Ingrese tipo de vehículo:\n\n[1] Auto\n[2] Utilitario\n[3] Moto'));
    switch (tipo) {
        case 1:
            tipo = 'auto';
            break;
        case 2:
            tipo = 'utilitario';
            break;
        case 3:
            tipo = 'moto';
            break;
        default:
            break;
    }
    let marca = prompt('Ingrese marca del vehículo');
    let modelo = prompt('Ingrese modelo del vehículo');
    let version = prompt('Ingrese versión');
    let combustible = parseInt(prompt('Indique tipo de combustible\n[1] Nafta\n[2] Diesel\n[3] GNC\n[4] Eléctrico\n[5] Híbrido'));
    let anio = parseInt(prompt('Ingrese año'));
    let kilometros = parseInt(prompt('Ingrese kilometraje'));
    let precio = prompt('Ingrese precio');
    let ubicacion = prompt('Ingrese su ubicación');

    const v = new Vehiculo(tipo, marca, modelo, version, combustible, anio, kilometros, precio, ubicacion);
    switch (v.tipo) {
        case 'auto':
            listaAutos.push(v);
            break;
        case 'utilitario':
            listaUtilitarios.push(v);
            break;
        case 'moto':
            listaMotos.push(v);
            break;
        default:
            break;
    }
}

// Función que le pregunta al usuario qué tipo de vehículo quiere mostrar (auto, utilitario o moto)
let seleccionarTipo = () => {    
    let tipoVehiculo;
    while (tipoVehiculo !== 1 || tipoVehiculo !== 2 || tipoVehiculo !== 3 || tipoVehiculo !== 4) {
        tipoVehiculo = parseInt(prompt('Seleccione una opción:\n\n[1] Autos\n[2] Utilitarios\n[3] Motos\n[4] Volver'));
        switch (tipoVehiculo) {
            case 1:
                verListado('auto');
                break;
            case 2:
                verListado('utilitario');
                break;
            case 3:
                verListado('moto');
                break;
            case 4:
                return 0;
            default:
                alert('Opción incorrecta');
                break;
        }
    }
}

// Función que muestra por consola el listado de vehículos disponibles, según lo que el usuario eligió ver (auto, utilitario o moto)
let verListado = tipo => {
    console.clear();

    // El usuario puede filtrar la lista de vehículos que se muestran por marca 
    let marca = prompt('Ingrese marca. Por ej ford, fiat, yamaha').trim().toLowerCase();
    alert('Abra la consola para ver el listado de vehículos');
    let listaFiltrada;
    switch (tipo) {
        case 'auto':
            listaFiltrada = listaAutos.filter(auto => auto.tipo === tipo).filter(auto => auto.marca === marca);
            break;
        case 'utilitario':
            listaFiltrada = listaUtilitarios.filter(utilitario => utilitario.tipo === tipo).filter(utilitario => utilitario.marca === marca);
            break;
        case 'moto':
            listaFiltrada = listaMotos.filter(moto => moto.tipo === tipo).filter(moto => moto.marca === marca);
            break;
    }

    // Si el usuario no ingresa ningun filtro, se muestran todas las marcas
    // if (listaFiltrada.length === 0) {
    //     listaFiltrada = listaVehiculos;
    // }

    for (let i = 0; i < listaFiltrada.length; i++) {
        console.log('Marca: ' + listaFiltrada[i].marca);
        console.log('Modelo: ' + listaFiltrada[i].modelo);
        console.log('Versión: ' + listaFiltrada[i].version);
        switch (listaFiltrada[i].combustible) {
            case 1:
                console.log('Combustible: nafta');
                break;
            case 2:
                console.log('Combustible: diesel');
                break;
            case 3:
                console.log('Combustible: GNC');
                break;
            case 4:
                console.log('Combustible: Eléctrico');
                break;
            case 5:
                console.log('Combustible: Híbrido');
                break;
            default:
                console.log('Combustible: Otro');
                break;
        }
        console.log('Precio: ' + listaFiltrada[i].precio);
        console.log('Ubicación: ' + listaFiltrada[i].ubicacion);
        console.log('-------------------------------')
    }
}

// Función para mostrar el menú principal
let mostrarMenu = () => {
    let respuestaUsuario;
    while (respuestaUsuario !== 3) {
        respuestaUsuario = parseInt(prompt('Seleccione una opción:\n\n[1] Publicar\n[2] Ver vehículos publicados\n[3] Salir'));
        switch (respuestaUsuario) {
            case 1:
                publicar();
                break;
            case 2:
                seleccionarTipo();
                break;
            case 3:
                alert('Gracias por visitar AutoTrade :)');
                break;
            default:
                alert('Opción incorrecta');
                break;
        }
    }
}

// Punto de partida de la app, esto es lo primero que se ejecuta
mostrarMenu();