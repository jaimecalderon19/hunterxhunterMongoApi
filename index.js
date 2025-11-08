const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const cazadoresRoutes = require('./routes/cazadores.routes');
const seedCaballeros = require('./seed/SeederMongo');
const swaggerDocs = require('./config/swagger');

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
connectDB().then(async () => {
  // Ejecutar el seeder
  await seedCaballeros();
});

app.use(cors());
app.use(express.json());

// Inicializar Swagger
swaggerDocs(app);

// Rutas
app.use('/api', cazadoresRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en ${process.env.HOST}:${PORT}`);
});