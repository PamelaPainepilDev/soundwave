const Artista = require("./Artista");
const Cancion = require("./Cancion");

Artista.hasMany(Cancion, { foreignKey: "artistaId" });
Cancion.belongsTo(Artista, { foreignKey: "artistaId" });

module.exports = { Artista, Cancion };