const express = require('express');
const router = express.Router();
const database = require('../models/database')
const MemberModel = require('../models/member')

// Função auxiliar para buscar membros por nome flexível
const findMembersByName = (searchName) => {
    return MemberModel.find({ name: { $regex: searchName, $options: 'i' } });
};

// Rotas GET
router.get('/members', async (req, res) => {
    try {
        const members = await MemberModel.find();
        res.json(members);
    } catch (error) {
        res.status(500).send('Erro ao obter os membros');
    }
});

router.get('/members/:name', async (req, res) => {
    const searchName = req.params.name;
    try {
        const members = await findMembersByName(searchName);
        if (members.length === 0) {
            res.status(404).send('Nenhum membro encontrado');
        } else {
            res.json(members);
        }
    } catch (error) {
        res.status(500).send('Erro ao buscar os membros');
    }
});

// Rota POST
router.post('/members', (req, res) => {
    const newMember = new MemberModel(req.body);
    newMember
        .save()
        .then(() => {
            res.send('Novo membro adicionado com sucesso');
        })
        .catch((error) => {
            res.status(500).send('Erro ao adicionar o membro');
        });
});

// Rota PUT
router.put('/members/:name', async (req, res) => {
    const searchName = req.params.name;
    const updatedData = req.body;

    try {
        const updatedMember = await MemberModel.findOneAndUpdate(
            { name: searchName },
            { $set: updatedData },
            { new: true }
        );

        if (!updatedMember) {
            res.status(404).send('Membro não encontrado');
        } else {
            res.send('Membro atualizado com sucesso!');
        }
    } catch (error) {
        res.status(500).send('Erro ao atualizar o membro');
    }
});

// Rota DELETE
router.delete('/members/:name', async (req, res) => {
    const searchName = req.params.name;

    try {
        const result = await MemberModel.deleteOne({ name: searchName });
        if (result.deletedCount === 0) {
            res.status(404).send('Membro não encontrado');
        } else {
            res.send('Membro excluído com sucesso!');
        }
    } catch (error) {
        res.status(500).send('Erro ao excluir o membro');
    }
});

module.exports = router;