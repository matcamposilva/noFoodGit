'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtoModel = new schema({
    "nome": { type: String, required: false, trim: true, index: true },
    "descricao": { type: String, required: false },
    "preco": { type: Number, required: false },
    "foto": { type: String, required: false },
    "ativo": { type: Boolean, required: false },
    "dataCriacao": { type: Date, default: Date.now }
}, { versionKey: false });

produtoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Produto', produtoModel);