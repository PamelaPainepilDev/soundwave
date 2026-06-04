require("dotenv").config();
const sequelize = require("./config/database");
const { Artista, Cancion } = require("./models");

async function seedear() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    // artistas
    const imagineDragons = await Artista.create({
      nombre: "Imagine Dragons",
      genero: "Rock",
      pais: "Estados Unidos"
    });

    const adele = await Artista.create({
      nombre: "Adele",
      genero: "Pop",
      pais: "Reino Unido"
    });

    const sia = await Artista.create({
      nombre: "Sia",
      genero: "Pop",
      pais: "Australia"
    });

    // canciones
    await Cancion.bulkCreate([
      { titulo: "Believer", album: "Evolve", duracion: 204, artistaId: imagineDragons.id },
      { titulo: "Thunder", album: "Evolve", duracion: 187, artistaId: imagineDragons.id },
      { titulo: "Radioactive", album: "Night Visions", duracion: 186, artistaId: imagineDragons.id },
      { titulo: "Rolling in the Deep", album: "21", duracion: 228, artistaId: adele.id },
      { titulo: "Someone Like You", album: "21", duracion: 285, artistaId: adele.id },
      { titulo: "Hello", album: "25", duracion: 295, artistaId: adele.id },
      { titulo: "Unstoppable", album: "This Is Acting", duracion: 217, artistaId: sia.id },
      { titulo: "Chandelier", album: "1000 Forms of Fear", duracion: 221, artistaId: sia.id },
      { titulo: "Cheap Thrills", album: "This Is Acting", duracion: 211, artistaId: sia.id }
    ]);

    console.log("Datos de prueba creados!");
    process.exit(0);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

seedear();