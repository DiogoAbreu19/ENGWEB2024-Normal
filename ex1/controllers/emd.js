const Contrato = require('../models/emd2');

module.exports.listContratos = () => {
    return Contrato.find().sort({ idcontrato: -1 });
}

module.exports.getContrato = id => {
    return Contrato.findOne({ idcontrato: id });
}

module.exports.getContratosByEntidade = entidade => {
    return Contrato.find({ entidade_comunicante: entidade });
}

module.exports.getContratosByTipoProcedimento = tipo => {
    return Contrato.find({ tipoprocedimento: tipo });
}

module.exports.listEntidadesComunicantes = () => {
    return Contrato
        .distinct('entidade_comunicante').sort()
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.listTiposProcedimento = () => {
    return Contrato.distinct('tipoprocedimento').sort();
}

module.exports.addContrato = contrato => {
    return Contrato.create(contrato);
}

module.exports.deleteContrato = id => {
    return Contrato.deleteOne({ idcontrato: id });
}

module.exports.updateContrato = contrato => {
    return Contrato.updateOne({ idcontrato: contrato.idcontrato }, contrato);
}
