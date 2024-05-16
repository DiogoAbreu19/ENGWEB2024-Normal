const mongoose = require('mongoose');

var emdSchema = new mongoose.Schema({
    idcontrato: String,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: String,
    prazoExecucao: String,
    NIPC_entidade_comunicante: String,
    entidade_comunicante: String,
    fundamentacao: String
});

module.exports = mongoose.model('contratos', emdSchema);