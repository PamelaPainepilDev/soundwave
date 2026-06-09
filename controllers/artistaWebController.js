const {Artista, Cancion} = require("../models");

exports.listar = async (req, res) => {
  const artistas = await Artista.findAll();
  res.render("artistas/index", {artistas: artistas.map(a => a.toJSON())});
};

exports.detalle = async (req, res) => {
  const artista = await Artista.findByPk(req.params.id, {include: Cancion});
  if (!artista) return res.status(404).send("No encontrado");
  const artistaJSON = artista.toJSON();
  const duracionTotal = artistaJSON.Cancions.reduce((total, c) => total + (c.duracion || 0), 0);
  const minutos = Math.floor(duracionTotal / 60);
  const segundos = duracionTotal % 60;
  artistaJSON.duracionTotal = `${minutos}:${segundos.toString().padStart(2, "0")}`;
  res.render("artistas/detalle", {artista: artistaJSON});
};

exports.formNuevo = async (req, res) => {
  res.render("artistas/form");
};

exports.crear = async (req, res) => {
  await Artista.create(req.body);
  res.redirect("/artistas");
};

exports.shuffle = async (req, res) => {
  const artista = await Artista.findByPk(req.params.id, {include: Cancion});
  if (!artista) return res.status(404).send("No encontrado");
  const canciones = artista.Cancions;
  if (canciones.length === 0) return res.redirect(`/artistas/${req.params.id}`);
  const random = canciones[Math.floor(Math.random() * canciones.length)];
  res.redirect(`/canciones/${random.id}`);
};

exports.listar = async (req, res) => {
  const artistas = await Artista.findAll();
  res.render("artistas/index", {artistas: artistas.map(a => a.toJSON())});
};

exports.detalle = async (req, res) => {
  const artista = await Artista.findByPk(req.params.id, {include: Cancion});
  if (!artista) return res.status(404).send("No encontrado");
  const artistaJSON = artista.toJSON();
  const duracionTotal = artistaJSON.Cancions.reduce((total, c) => total + (c.duracion || 0), 0);
  const minutos = Math.floor(duracionTotal / 60);
  const segundos = duracionTotal % 60;
  artistaJSON.duracionTotal = `${minutos}:${segundos.toString().padStart(2, "0")}`;
  res.render("artistas/detalle", {artista: artistaJSON});
};

exports.formNuevo = async (req, res) => {
  res.render("artistas/form");
};

exports.crear = async (req, res) => {
  await Artista.create(req.body);
  res.redirect("/artistas");
};

exports.shuffle = async (req, res) => {
  const artista = await Artista.findByPk(req.params.id, {include: Cancion});
  if (!artista) return res.status(404).send("No encontrado");
  const canciones = artista.Cancions;
  if (canciones.length === 0) return res.redirect(`/artistas/${req.params.id}`);
  const random = canciones[Math.floor(Math.random() * canciones.length)];
  res.redirect(`/canciones/${random.id}`);
};

exports.home = async (req, res) => {
  res.render("home");
};