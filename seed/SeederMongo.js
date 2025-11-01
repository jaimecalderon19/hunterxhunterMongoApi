const Cazador = require('../models/cazadorModel');

const cazadoresIniciales = [
  {
    nombre: 'Gon Freecss',
    edad: 12,
    altura: 154,
    peso: 49,
    genero: 'Masculino',
    imagen: 'https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png/revision/latest?cb=20230904181801',
    habilidades: ['Jajanken', 'Sentido Agudo', 'Determinación'],
    tipoLicencia: 'Novato'
  },
  {
    nombre: 'Killua Zoldyck',
    edad: 12,
    altura: 158,
    peso: 45,
    genero: 'Masculino',
    imagen: 'https://static.wikia.nocookie.net/hunterxhunter/images/f/f1/KilluaSuperZetsu.png/revision/latest/scale-to-width-down/732?cb=20140323022118&path-prefix=es',
    habilidades: ['Electricidad', 'Velocidad Extrema', 'Asesinato Silencioso'],
    tipoLicencia: 'Novato'
  },
  {
    nombre: 'Kurapika',
    edad: 17,
    altura: 171,
    peso: 59,
    genero: 'Masculino',
    imagen: 'https://wallpapers.com/images/hd/serious-and-solemn-kurapika-hxh-pfp-454uuie77rq43h7a.jpg',
    habilidades: ['Cadenas del Juicio', 'Ojos Escarlata', 'Intelecto Superior'],
    tipoLicencia: 'Single Star'
  },
  {
    nombre: 'Leorio Paradinight',
    edad: 19,
    altura: 193,
    peso: 85,
    genero: 'Masculino',
    imagen: 'https://static.wikia.nocookie.net/universecw/images/8/8d/LeorioParadinight0.JPG/revision/latest?cb=20201121092427&path-prefix=es',
    habilidades: ['Golpe del Portal', 'Medicina', 'Carisma'],
    tipoLicencia: 'Single Star'
  },
  {
    nombre: 'Hisoka Morow',
    edad: 28,
    altura: 187,
    peso: 91,
    genero: 'Masculino',
    imagen: 'https://static.wikia.nocookie.net/hunterxhunter/images/2/29/Hisoka_Morow_YC_Portrait.png/revision/latest?cb=20190123172039',
    habilidades: ['Bungee Gum', 'Textura Engañosa', 'Manipulación Nen'],
    tipoLicencia: 'Double Star'
  },
  {
    nombre: 'Isaac Netero',
    edad: 110,
    altura: 160,
    peso: 58,
    genero: 'Masculino',
    imagen: 'https://static.wikia.nocookie.net/hunterxhunter/images/8/88/Isaac_Netero_HE_Portrait.png/revision/latest?cb=20230314041500',
    habilidades: ['Guanyin Bodhisattva', 'Nen de Velocidad Extrema', 'Aura Explosiva'],
    tipoLicencia: 'Triple Star'
  }
];

const seedCazadores = async () => {
  try {
    const count = await Cazador.countDocuments();

    if (count === 0) {
      await Cazador.insertMany(cazadoresIniciales);
      console.log('🧭 Cazadores iniciales insertados correctamente.');
    } else {
      console.log('⚠️ Ya existen cazadores en la base de datos, no se insertaron nuevos.');
    }
  } catch (error) {
    console.error('❌ Error al insertar los cazadores iniciales:', error.message);
  }
};

module.exports = seedCazadores;
