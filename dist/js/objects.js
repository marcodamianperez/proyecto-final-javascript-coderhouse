// Estos son vehículos ya publicados por defecto para que la app no esté vacía al inicio
let publications = [];

// Autos
publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Cars',
            brand: 'Fiat',
            model: 'Palio',
            version: '1.8 HLX',
            fuel: 'Nafta',
            year: 2004,
            transmission: 'Manual',
            mileaje: 162000,
            price: 420000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Martín Cáseres',
            phone: '+549254982101',
            email: 'martincaseres@gmail.com',
            location: {
                province: 'Mendoza',
                city: 'Guaymallén',
                street: 'Paso de los Andes 721'
            }
        },
        images: ['img/palio.jpg'],
        exchange: false,
        dates: {
            publicationDate: '25/01/2021',
            lastEditDate: '07/02/2021'
        },
        highlighted: false,
        description: 'Excelente estado. Papeles al día.',
        id: 1
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Cars',
            brand: 'Mercedes Benz',
            model: 'Clase A',
            version: 'A250 Blueefficiency At Sport',
            fuel: 'Nafta',
            year: 2014,
            transmission: 'Automática',
            mileaje: 18500,
            price: 2800000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Marco',
            phone: '+549254982101',
            email: 'martincaseres@gmail.com',
            location: {
                province: 'Buenos Aires',
                city: 'San Fernando',
                street: 'Rivadavia 650'
            }
        },
        images: ['img/a250.jpg'],
        exchange: false,
        dates: {
            publicationDate: '18/03/2021',
            lastEditDate: '18/03/2021'
        },
        highlighted: false,
        description: 'Como recién salido de la agencia.',
        id: 2
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Cars',
            brand: 'Fiat',
            model: 'Punto',
            version: 'Sporting Black Motion',
            fuel: 'Nafta',
            year: 2010,
            transmission: 'Manual',
            mileaje: 80000,
            price: 850000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Julián',
            phone: '+5493359804',
            email: 'julian_45@gmail.com',
            location: {
                province: 'Buenos Aires',
                city: 'La Matanza',
                street: 'Irigoyen 37'
            }
        },
        images: ['img/punto.jpg'],
        exchange: true,
        dates: {
            publicationDate: '20/12/2020',
            lastEditDate: '01/01/2021'
        },
        highlighted: false,
        description: 'Permutaría por moto tipo enduro.',
        id: 3
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Cars',
            brand: 'Ford',
            model: 'Focus',
            version: '2.0 Guia',
            fuel: 'Nafta',
            year: 2014,
            transmission: 'Manual',
            mileaje: 71500,
            price: 1250000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Daniela',
            phone: '+549498745',
            email: 'daniela.d@outlook.com',
            location: {
                province: 'La Pampa',
                city: 'Ciudad',
                street: 'Av. Los Aleres 445'
            }
        },
        images: ['img/focus.jpeg'],
        exchange: false,
        dates: {
            publicationDate: '21/12/2020',
            lastEditDate: '21/12/2020'
        },
        highlighted: false,
        description: '100% original. Sólo efectivo.',
        id: 4
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Cars',
            brand: 'Ford',
            model: 'Mondeo',
            version: '2.5 SE',
            fuel: 'Diesel',
            year: 2019,
            transmission: 'Automática',
            mileaje: 7000,
            price: 2900000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Francisco Ruiz',
            phone: '+549264789',
            email: 'fran.ruiz@yahoo.com',
            location: {
                province: 'Buenos Aires',
                city: 'CABA',
                street: 'Corrientes 102'
            }
        },
        images: ['img/mondeo.jpg'],
        exchange: false,
        dates: {
            publicationDate: '15/03/2021',
            lastEditDate: '18/03/2021'
        },
        highlighted: false,
        description: 'Titular, papeles al día.',
        id: 5
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Cars',
            brand: 'Volkswagen',
            model: 'Gol',
            version: 'Power',
            fuel: 'GNC',
            year: 2011,
            transmission: 'Manual',
            mileaje: 190000,
            price: 600000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Silvana Montes',
            phone: '+549870231',
            email: 'lasilvi77@gmail.com',
            location: {
                province: 'Misiones',
                city: 'Posadas',
                street: 'Benavente 79'
            }
        },
        images: ['img/gol.jpg'],
        exchange: true,
        dates: {
            publicationDate: '11/02/2021',
            lastEditDate: '11/03/2021'
        },
        highlighted: false,
        description: 'Precio negociable, escucho ofertas. Paso más fotos por WhatsApp',
        id: 6
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Cars',
            brand: 'Volkswagen',
            model: 'Scirocco',
            version: '2.0 TSI',
            fuel: 'Nafta',
            year: 2013,
            transmission: 'Manual',
            mileaje: 68000,
            price: 2750000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Diego',
            phone: '+5492614879',
            email: 'dieguito_c@gmail.com',
            location: {
                province: 'Mendoza',
                city: 'Las Heras',
                street: 'San Miguel 118'
            }
        },
        images: ['img/scirocco.jpg'],
        exchange: false,
        dates: {
            publicationDate: '05/01/2021',
            lastEditDate: '12/03/2021'
        },
        highlighted: false,
        description: 'Impecable, versión más full. Sólo efectivo.',
        id: 7
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Cars',
            brand: 'Renault',
            model: 'Clio',
            version: 'Sport',
            fuel: 'Nafta',
            year: 1998,
            transmission: 'Manual',
            mileaje: 225000,
            price: 1000000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Sebastián',
            phone: '+5492578021',
            email: 'sebalarea@outlook.com',
            location: {
                province: 'Chubut',
                city: 'Puerto Madryn',
                street: 'Capitán Gómez 335'
            }
        },
        images: ['img/clio.jpg'],
        exchange: true,
        dates: {
            publicationDate: '11/11/2020',
            lastEditDate: '19/02/2021'
        },
        highlighted: false,
        description: 'Detalles a la vista. Cubiertas nuevas.',
        id: 8
    }
));


// Utilitarios
publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Pickups',
            brand: 'Fiat',
            model: 'Fiorino',
            version: 'Fire',
            fuel: 'GNC',
            year: 1997,
            transmission: 'Manual',
            mileaje: 160000,
            price: 490000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Ricardo',
            phone: '+5492578021',
            email: 'richard11@gmail.com',
            location: {
                province: 'San Luis',
                city: 'Villa Mercedes',
                street: 'Calle Angosta 25'
            }
        },
        images: ['img/fiorino.jpg'],
        exchange: true,
        dates: {
            publicationDate: '05/01/2021',
            lastEditDate: '28/02/2021'
        },
        highlighted: false,
        description: 'Vehículo de trabajo. Muy cuidado.',
        id: 9
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Pickups',
            brand: 'Peugeot',
            model: 'Partner',
            version: '1.4 Security Pack',
            fuel: 'Diesel',
            year: 2007,
            transmission: 'Manual',
            mileaje: 110000,
            price: 870000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Esteban Pérez',
            phone: '+5492578021',
            email: 'estebanpe@gmail.com',
            location: {
                province: 'Catamarca',
                city: 'Antofagasta de la Sierra',
                street: 'Juan Ruiz 321'
            }
        },
        images: ['img/partner.jpg'],
        exchange: true,
        dates: {
            publicationDate: '31/07/2020',
            lastEditDate: '28/12/2020'
        },
        highlighted: false,
        description: 'Escucho ofertas.',
        id: 10
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Pickups',
            brand: 'Volkswagen',
            model: 'Saveiro',
            version: '1.6',
            fuel: 'Nafta',
            year: 1999,
            transmission: 'Manual',
            mileaje: 172000,
            price: 350000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Daniel',
            phone: '+5492578021',
            email: 'danikpo@gmail.com',
            location: {
                province: 'Catamarca',
                city: 'Poman',
                street: 'Avellaneda 799'
            }
        },
        images: ['img/saveiro.jpg'],
        exchange: false,
        dates: {
            publicationDate: '31/12/2020',
            lastEditDate: '31/12/2020'
        },
        highlighted: false,
        description: 'Leve choque en la puerta izquierda.',
        id: 11
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Pickups',
            brand: 'Mercedes Benz',
            model: 'Sprinter',
            version: '411 Cdi Street Furgón 3250 Tn V1',
            fuel: 'Diesel',
            year: 2014,
            transmission: 'Automática',
            mileaje: 190000,
            price: 1820000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Gerardo',
            phone: '+5492578021',
            email: 'gerarm@gmail.com',
            location: {
                province: 'Santa Fe',
                city: 'Rosario',
                street: 'Monte Grande 740'
            }
        },
        images: ['img/sprinter.jpg'],
        exchange: false,
        dates: {
            publicationDate: '9/03/2021',
            lastEditDate: '9/03/2021'
        },
        highlighted: false,
        description: 'Muy buen estado, pocos kilómetros.',
        id: 12
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Pickups',
            brand: 'Chevrolet',
            model: 'S-10',
            version: '2.8 TD 4x2',
            fuel: 'Diesel',
            year: 2011,
            transmission: 'Manual',
            mileaje: 104000,
            price: 1220000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Cristian',
            phone: '+5492578021',
            email: 'cristianfg@gmail.com',
            location: {
                province: 'Córdoba',
                city: 'Capital',
                street: 'Resistencia 227'
            }
        },
        images: ['img/s10.jpeg'],
        exchange: false,
        dates: {
            publicationDate: '15/12/2020',
            lastEditDate: '15/12/2020'
        },
        highlighted: false,
        description: 'Impecable.',
        id: 13
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Pickups',
            brand: 'Toyota',
            model: 'Hilux',
            version: '4x4 CS SRX 2.8 TDI',
            fuel: 'Diesel',
            year: 2021,
            transmission: 'Automática',
            mileaje: 0,
            price: 3320000,
            brandNew: true
        },
        sellerInfo: {
            name: 'José Caño',
            phone: '+5492578021',
            email: 'canioconsesionarios@gmail.com',
            location: {
                province: 'Santa Fe',
                city: 'Rosario',
                street: 'Marroqui 48'
            }
        },
        images: ['img/hilux.jpg'],
        exchange: false,
        dates: {
            publicationDate: '13/03/2021',
            lastEditDate: '13/03/2021'
        },
        highlighted: false,
        description: '0 Km. Consultar financiación.',
        id: 14
    }
));


// // // Motos
publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Motorcycles',
            brand: 'Kawasaki',
            model: 'Ninja',
            version: '650R Sport',
            fuel: 'Nafta',
            year: 2021,
            transmission: 'Manual',
            mileaje: 7000,
            price: 3000000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Mariano',
            phone: '+5492578021',
            email: 'marian650@gmail.com',
            location: {
                province: 'Mendoza',
                city: 'Maipú',
                street: 'Ozamis 323'
            }
        },
        images: ['img/ninja.jpg'],
        exchange: false,
        dates: {
            publicationDate: '05/01/2021',
            lastEditDate: '05/01/2021'
        },
        highlighted: false,
        description: 'Excelente estado.',
        id: 15
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Motorcycles',
            brand: 'Honda',
            model: 'Tornado',
            version: 'XR250',
            fuel: 'Nafta',
            year: 2001,
            transmission: 'Manual',
            mileaje: 12000,
            price: 1000000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Carlos',
            phone: '+5492578021',
            email: 'carvega@gmail.com',
            location: {
                province: 'Tierra del Fuego',
                city: 'Usuaia',
                street: 'Calle Blanca 89'
            }
        },
        images: ['img/tornado.jpg'],
        exchange: false,
        dates: {
            publicationDate: '17/02/2021',
            lastEditDate: '16/03/2021'
        },
        highlighted: false,
        description: 'Acepto auto como parte de pago.',
        id: 16
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Motorcycles',
            brand: 'Yamaha',
            model: 'MT',
            version: '03',
            fuel: 'Nafta',
            year: 2016,
            transmission: 'Manual',
            mileaje: 2000,
            price: 2500000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Agustin Arroyo',
            phone: '+5492578021',
            email: 'agus_a@gmail.com',
            location: {
                province: 'San Juan',
                city: 'Santa Lucía',
                street: 'Rivero 321'
            }
        },
        images: ['img/mt.jpg'],
        exchange: false,
        dates: {
            publicationDate: '30/12/2020',
            lastEditDate: '01/03/2021'
        },
        highlighted: false,
        description: 'Como nueva muy poco uso.',
        id: 17
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Motorcycles',
            brand: 'Suzuki',
            model: 'Inazuma',
            version: '250',
            fuel: 'Nafta',
            year: 2015,
            transmission: 'Manual',
            mileaje: 3800,
            price: 1500000,
            brandNew: false
        },
        sellerInfo: {
            name: 'Claudio',
            phone: '+5492578021',
            email: 'clausan@gmail.com',
            location: {
                province: 'Santa Cruz',
                city: 'Caleta Oliva',
                street: 'Juarez Ruiz 3329'
            }
        },
        images: ['img/inazuma.jpg'],
        exchange: false,
        dates: {
            publicationDate: '14/03/2021',
            lastEditDate: '14/03/2021'
        },
        highlighted: false,
        description: 'Se vende urgente por viaje.',
        id: 18
    }
));

publications.push(new Publication(
    {
        vehicleInfo: {
            type: 'Motorcycles',
            brand: 'Zanella',
            model: 'ZB',
            version: '110 Tambor',
            fuel: 'Nafta',
            year: 2021,
            transmission: 'Manual',
            mileaje: 0,
            price: 95000,
            brandNew: true
        },
        sellerInfo: {
            name: 'Federico Panella',
            phone: '+5492578021',
            email: 'fepanella@gmail.com',
            location: {
                province: 'Río Negro',
                city: 'Bariloche',
                street: 'Cerro Alto S/N'
            }
        },
        images: ['img/zb.jpg'],
        exchange: false,
        dates: {
            publicationDate: '19/03/2021',
            lastEditDate: '19/03/2021'
        },
        highlighted: false,
        description: 'Precio contado efectivo - No incluye gastos.',
        id: 19
    }
));