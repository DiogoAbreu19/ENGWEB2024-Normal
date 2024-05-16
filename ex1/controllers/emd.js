const Contrato = require('../models/emd2');

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.lookUp = id => {
    return Contrato
        .findOne({ _id: id })
        .exec()
}

module.exports.findEntidade = NIPC_entidade_comunicante => {
    return Contrato
        .find({ NIPC_entidade_comunicante: NIPC_entidade_comunicante })
        .exec()
}

module.exports.findTipo = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec()
}

module.exports.listentidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec();
}

module.exports.listtipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec();
}

module.exports.insert = (contrato) => {
    if (Contrato.findOne({ _id: contrato._id }).length == 1) {
        return Promise.reject(new Error("Id already exists"))
    }

    var novo = new Contrato(contrato)
    return novo.save()
}

module.exports.delete = id => {
    return Contrato
        .deleteOne({ _id: id })
        .exec();
}

module.exports.update = (id, contrato) => {
    return Contrato
        .updateOne({ _id: id }, contrato)
        .exec();
}