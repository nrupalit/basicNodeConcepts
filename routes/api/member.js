const express = require('express');
const route = express.Router();
const members = require('../../Members');

//Gets All members
route.get('/', (req, res) => {
    const lastId = members[members.length - 1].id
    res.send(`${lastId}<br/>`);
})

//Get single member
route.get('/:id', (req, res) => {
    const value = members.some(member => member.id === parseInt(req.params.id));

    if (value) res.json(members.filter(member => member.id === parseInt(req.params.id)));
    else res.send(`<h1>No member with ID ${req.params.id} </h1>`);
})

route.post('/', (req, res) => {
    const lastId = members[members.length - 1].id
    const newMem = {
        id: lastId + 1,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    members.push(newMem);
    res.json(members);
    
})



module.exports = route;