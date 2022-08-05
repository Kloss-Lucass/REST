const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDO
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Pedido retornado com sucesso!'
    });
});

//INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };
    
    res.status(201).send({
        mensagem: 'Pedido inserido com sucesso!',
        pedidoCriado: pedido
    });
});

//ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido alterado com sucesso!'
    });
});


//EXCLUI UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluído com sucesso!'
    });
});

module.exports = router;