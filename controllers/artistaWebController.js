const {Artista, Cancion} = require("../models");

exports.listar = async (req, res) => {
  const artistas = await Artista.findAll();
  res.render("artistas/index", {artistas: artistas.map(a => a.toJSON())});
};

exports.detalle = async (req, res) => {
  const artista = await Artista.findByPk(req.params.id, {include: Cancion});
  if (!artista) return res.status(404).send("No encontrado");
  res.render("artistas/detalle", {artista: artista.toJSON()});
};

exports.formNuevo = async (req, res) => {
  res.render("artistas/form");
};

exports.crear = async (req, res) => {
  await Artista.create(req.body);
  res.redirect("/artistas");
};