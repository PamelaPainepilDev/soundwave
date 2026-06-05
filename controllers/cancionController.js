const {Cancion, Artista} = require("../models");

exports.listar = async (req, res) => {
  const canciones = await Cancion.findAll({include: Artista});
  res.json(canciones);
};

exports.obtener = async (req, res) => {
  const cancion = await Cancion.findByPk(req.params.id, {include: Artista});
  if (!cancion) return res.status(404).json({error: "No encontrada"});
  res.json(cancion);
};

exports.crear = async (req, res) => {
  const cancion = await Cancion.create(req.body);
  res.status(201).json(cancion);
};

exports.actualizar = async (req, res) => {
  const cancion = await Cancion.findByPk(req.params.id);
  if (!cancion) return res.status(404).json({error: "No encontrada"});
  await cancion.update(req.body);
  res.json(cancion);
};

exports.eliminar = async (req, res) => {
  const cancion = await Cancion.findByPk(req.params.id);
  if (!cancion) return res.status(404).json({error: "No encontrada"});
  await cancion.destroy();
  res.json({mensaje: "Eliminada"});
};