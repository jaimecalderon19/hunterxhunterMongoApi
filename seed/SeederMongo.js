const Cazador = require('../models/cazadorModel');

const cazadoresIniciales = [
  {
    nombre: 'Gon Freecss',
    edad: 12,
    altura: 154,
    peso: 49,
    genero: 'Masculino',
    imagen: 'https://example.com/gon.jpg',
    habilidades: ['Jajanken', 'Sentido Agudo', 'Determinación'],
    tipoLicencia: 'Novato'
  },
  {
    nombre: 'Killua Zoldyck',
    edad: 12,
    altura: 158,
    peso: 45,
    genero: 'Masculino',
    imagen: 'https://example.com/killua.jpg',
    habilidades: ['Electricidad', 'Velocidad Extrema', 'Asesinato Silencioso'],
    tipoLicencia: 'Novato'
  },
  {
    nombre: 'Kurapika',
    edad: 17,
    altura: 171,
    peso: 59,
    genero: 'Masculino',
    imagen: 'https://example.com/kurapika.jpg',
    habilidades: ['Cadenas del Juicio', 'Ojos Escarlata', 'Intelecto Superior'],
    tipoLicencia: 'Single Star'
  },
  {
    nombre: 'Leorio Paradinight',
    edad: 19,
    altura: 193,
    peso: 85,
    genero: 'Masculino',
    imagen: 'https://example.com/leorio.jpg',
    habilidades: ['Golpe del Portal', 'Medicina', 'Carisma'],
    tipoLicencia: 'Single Star'
  },
  {
    nombre: 'Hisoka Morow',
    edad: 28,
    altura: 187,
    peso: 91,
    genero: 'Masculino',
    imagen: 'https://example.com/hisoka.jpg',
    habilidades: ['Bungee Gum', 'Textura Engañosa', 'Manipulación Nen'],
    tipoLicencia: 'Double Star'
  },
  {
    nombre: 'Isaac Netero',
    edad: 110,
    altura: 160,
    peso: 58,
    genero: 'Masculino',
    imagen: 'https://example.com/netero.jpg',
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
