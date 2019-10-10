'use strict'

require('../models/categoria-model');
const mongoose = require('mongoose');
const categoria = mongoose.model('Categoria');

function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => { 
    let nova = new categoria/(req.body);
    return nova.save();
};

categoriaController.prototype.put = async (req, res) => { 
    await categoria.findByIdAndUpdate(req.params.id, { $set: req.body });
    return categoria.findById(req.params.id);
};

categoriaController.prototype.get = async (req, res) => {
    return categoria.find();
    //res.status(200).send('Funcionando...');
};

categoriaController.prototype.getById = async (req, res) => {
    //res.status(200).send(`O id passado foi ${req.params.id}`);
    return categoria.findById(req.params.id);
};

categoriaController.prototype.delete = async (req, res) => { 
    return categoria.findByIdAndRemove(req.params.id);
};

module.exports = categoriaController;