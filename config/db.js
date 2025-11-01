const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log('🔗 Conectando a MongoDB en:', uri);

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      dbName: 'hunter',
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    process.exit(1); // Detiene la app si no hay conexión
  }
};

module.exports = connectDB;
