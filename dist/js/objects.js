// Estos son vehículos ya publicados por defecto para que la app no esté vacía al inicio

// Autos
const auto1 = new Vehiculo('auto', 'fiat', 'palio', '1.8 hlx', 1, 2004, 120000, '400000', 'Rioja 478, Mendoza, Argentina');
const auto2 = new Vehiculo('auto', 'fiat', 'punto', '1.6 sporting', 1, 2013, 100000, '650000', 'Ituzaingo 203, Santa Cruz, Argentina');
const auto3 = new Vehiculo('auto', 'ford', 'focus', '2.0 guia', 1, 2015, 60000, '1200000', 'España 64, La Pampa, Argentina');
const auto4 = new Vehiculo('auto', 'ford', 'mondeo', '2.5 se', 2, 2019, 10000, '3450000', 'Benavente 944, CABA, Argentina');
const auto5 = new Vehiculo('auto', 'volkswagen', 'gol', '1.6 trend', 3, 2014, 90000, '650000', 'MJ C7, Formosa, Argentina');
const auto6 = new Vehiculo('auto', 'volkswagen', 'scirocco', '2.0 tsi', 1, 2016, 70000, '4500000', 'Alsina 991, San Fernando, Argentina');
const auto7 = new Vehiculo('auto', 'renault', 'clio', 'sport', 1, 1998, 150000, '650000', 'Moron 31, Mendoza, Argentina');

// Utilitarios
const utilitario1 = new Vehiculo('utilitario', 'fiat', 'fiorino', '1.6', 2, 1997, 190000, '300000', 'Rioja 478, Mendoza, Argentina');
const utilitario2 = new Vehiculo('utilitario', 'peugeot', 'partner', '1.4 security pack', 1, 2009, 100000, '800000', 'Rioja 478, Mendoza, Argentina');
const utilitario3 = new Vehiculo('utilitario', 'volkswagen', 'saveiro', '1.6', 1, 1999, 120000, '350000', 'Rioja 478, Mendoza, Argentina');
const utilitario4 = new Vehiculo('utilitario', 'chevrolet', 's-10', '2.8 td 4x2', 2, 2011, 180000, '1320000', 'Bandera de los Andes 8811, Tierra del Fuego, Argentina');
const utilitario5 = new Vehiculo('utilitario', 'toyota', 'hilux', '4x4 cd srx 2.8 tdi', 2, 2021, 1000, '3000000', 'Tirasso 401, Catamarca, Argentina');

// Motos
const moto1 = new Vehiculo('moto', 'kawasaki', 'ninja', '650 r sport', 1, 2010, 7000, '3000000', 'Rioja 478, Mendoza, Argentina');
const moto2 = new Vehiculo('moto', 'honda', 'tornado', 'xr250', 1, 2001, 12000, '1000000', 'Rioja 478, Mendoza, Argentina');
const moto3 = new Vehiculo('moto', 'yamaha', 'zanella', '150', 1, 2018, 8000, '75000', 'Rioja 478, Mendoza, Argentina');
const moto4 = new Vehiculo('moto', 'suzuki', 'dr', '350 r', 1, 1992, 8000, '340000', 'Srmorile 27, Mendoza, Argentina');

/*
En estos arrays se guardan todos los vehículos (objetos) publicados.
Decidí serparar los arrays por cuestiones de rendimiento, si el usuario solicita sólo motos, sólo se recorre el array de motos, en cambio si estuviesen todos los tipos de vehículos en un mismo array, tendía que recorrerlo completo y filtrar los que no necesito.
*/
let listaAutos = [auto1, auto2, auto3, auto4, auto5, auto6, auto7];
let listaUtilitarios = [utilitario1, utilitario2, utilitario3, utilitario4, utilitario5];
let listaMotos = [moto1, moto2, moto3, moto4];