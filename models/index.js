const Artista = require("./artista");
const Cancion = require("./cancion");

Artista.hasMany(Cancion, { foreignKey: "artistaId" });
Cancion.belongsTo(Artista, { foreignKey: "artistaId" });

module.exports = { Artista, Cancion };