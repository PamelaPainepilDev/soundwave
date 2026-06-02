# SoundWave 🎵

Plataforma colaborativa de gestión musical estilo Spotify.

## Descripción
Aplicación web que permite administrar un catálogo musical: artistas y sus canciones, siguiendo el patrón MVC y conectándose a PostgreSQL mediante Sequelize.

## Stack tecnológico
- Node.js + Express
- Sequelize (ORM)
- PostgreSQL
- Express-Handlebars
- dotenv

## Estructura del proyecto
soundwave/
├── config/       → Configuración de base de datos
├── models/       → Modelos Artista y Cancion con relación 1:N
├── controllers/  → Lógica de negocio
├── routes/       → Rutas REST y web
├── views/        → Vistas Handlebars
├── app.js        → Servidor principal
└── seeder.js     → Datos de prueba

## Instalación
1. Clonar el repositorio
2. Instalar dependencias:
   npm install
3. Crear archivo .env con tus datos:
   DB_NAME=soundwave
   DB_USER=postgres
   DB_PASS=tu_contraseña
   DB_HOST=localhost
   DB_PORT=5432
   PORT=3000
4. Crear la base de datos soundwave en pgAdmin
5. Ejecutar el servidor:
   node app.js

## Datos de prueba
Para cargar artistas y canciones de ejemplo:
   node seeder.js

## Autora
Pamela Painepil

## URL del repositorio
https://github.com/PamelaPainepilDev/soundwave.git