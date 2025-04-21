// server.js
const express = require('express');
const path = require('path');
const app = express();

// 1) Servir toda la carpeta como estáticos
app.use(express.static(path.join(__dirname)));

// 2) Para cualquier ruta que no sea archivo (.html, .css, .js, etc),
//    devolvemos index.html (útil si mañana usás SPA o rutas amigables)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 3) Arrancar en el puerto 3000 o el que definas en env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
