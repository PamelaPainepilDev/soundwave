const { Artista, Cancion } = require("../models");
exports.listar = async (req, res) => {
    const artistas = await Artista.findAll();
    res.json(artistas);
};

exports.obtener = async (req, res) => {
    const artista = await Artista.findByPk(req.params.id, { include: Cancion});
    if (!artista) return res.status(404).json({ error: "No encontrado"});
    res.json(artista);
};

exports.crear = async (req, res) => {
    const artista = await Artista.create(req.body);
    res.status(201).json(artista);
};

exports.actualizar = async (req, res) => {
    const artista = await Artista.findByPk(req.params.id);
    if (!artista) return res.status(404).json({error: "No encontrado"});
    await artista.update(req.body);
    res.json(artista);
};

exports.eliminar = async (req, res) => {
    const artista = await Artista.findByPk(req.params.id);
    if (!artista) return res.status(404).json({error: "No encontrado"});
    await artista.destroy();
    res.json({mensaje: "Eliminado"});
};