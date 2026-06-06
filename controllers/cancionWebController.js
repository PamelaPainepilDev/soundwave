const { Cancion, Artista } = require("../models");

exports.listar = async (req, res) => {
  const canciones = await Cancion.findAll({ include: Artista });
  res.render("canciones/index", { canciones: canciones.map(c => c.toJSON()) });
};

exports.detalle = async (req, res) => {
  const cancion = await Cancion.findByPk(req.params.id, { include: Artista });
  if (!cancion) return res.status(404).send("No encontrada");
  const cancionJSON = cancion.toJSON();
  res.render("canciones/detalle", { cancion: cancionJSON });
};

exports.formNueva = async (req, res) => {
  const artistas = await Artista.findAll();
  res.render("canciones/form", { artistas: artistas.map(a => a.toJSON()) });
};

exports.crear = async (req, res) => {
  await Cancion.create(req.body);
  res.redirect("/canciones");
};