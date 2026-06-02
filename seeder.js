require("dotenv").config();
const sequelize = require("./config/database");
const { Artista, Cancion } = require("./models");

async function seedear() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    // Crear artistas
    const taylor = await Artista.create({
      nombre: "Taylor Swift",
      genero: "Pop",
      pais: "Estados Unidos"
    });

    const coldplay = await Artista.create({
      nombre: "Coldplay",
      genero: "Rock",
      pais: "Reino Unido"
    });

    const badBunny = await Artista.create({
      nombre: "Bad Bunny",
      genero: "Urbano",
      pais: "Puerto Rico"
    });

    // Crear canciones
    await Cancion.bulkCreate([
      { titulo: "Shake It Off", album: "1989", duracion: 219, artistaId: taylor.id },
      { titulo: "Blank Space", album: "1989", duracion: 231, artistaId: taylor.id },
      { titulo: "Yellow", album: "Parachutes", duracion: 269, artistaId: coldplay.id },
      { titulo: "The Scientist", album: "A Rush of Blood", duracion: 307, artistaId: coldplay.id },
      { titulo: "Tití Me Preguntó", album: "Un Verano Sin Ti", duracion: 238, artistaId: badBunny.id },
      { titulo: "Me Porto Bonito", album: "Un Verano Sin Ti", duracion: 178, artistaId: badBunny.id }
    ]);

    console.log("✓ Datos de prueba creados!");
    process.exit(0);
  } catch (err) {
    console.error("✗ Error:", err.message);
    process.exit(1);
  }
}

seedear();