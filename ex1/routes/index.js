var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/emd');

router.get('/contratos', (req, res) => {
  if(req.query.entidade) {
    Contrato.getContratosByEntidade(req.query.entidade)
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao obter contratos por entidade." }));
  } else if(req.query.tipo) {
    Contrato.getContratosByTipoProcedimento(req.query.tipo)
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao obter contratos por tipo de procedimento." }));
  } else {
    Contrato.listContratos()
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao obter lista de contratos." }));
  }
});

router.get('/contratos/:id', (req, res) => {
  Contrato.getContrato(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao obter contrato por ID." }));
});

router.get('/contratos/entidades', (req, res) => {
  Contrato.listEntidadesComunicantes()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao obter lista de entidades comunicantes." }));
});

router.get('/contratos/tipos', (req, res) => {
  Contrato.listTiposProcedimento()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao obter lista de tipos de procedimento." }));
});

router.post('/contratos', (req, res) => {
  Contrato.addContrato(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao adicionar contrato." }));
});

router.delete('/contratos/:id', (req, res) => {
  Contrato.deleteContrato(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao excluir contrato." }));
});

router.put('/contratos/:id', (req, res) => {
  Contrato.updateContrato(req.body)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).json({ erro: erro, mensagem: "Erro ao atualizar contrato." }));
});

module.exports = router;
