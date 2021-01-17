const express = require('express');

const router = express.Router();

let id = 0;
let myAdventurers = [];

router.get('/', async (request, response) => {
    try {
        return response.status(200).send({adventurers: myAdventurers});
    } catch (err) {
        console.error(err);
        return response.status(400).send({message: "something went wrong... please check logs"});
    }
});

router.post('/', async (request, response) => {
    try {
        const {name, age, height} = request.body;

        const adventurer = {
            id: id++,
            name: name,
            age: age,
            height: height
        };
        myAdventurers.push(adventurer);

        return response.status(201).send({adventurer: adventurer});
    } catch (err) {
        console.error(err);
        return response.status(400).send({message: "something went wrong... please check logs"});
    }
});

router.delete('/', async (request, response) => {
    try {
        const {id} = request.query;

        let outAdventurers = [];
        for (const adventurer of myAdventurers) {
            if (parseInt(adventurer.id) !== parseInt(id)) outAdventurers.push(adventurer)
        }
        myAdventurers = outAdventurers;

        return response.status(200).send({adventurers: myAdventurers});
    } catch (err) {
        console.error(err);
        return response.status(400).send({message: "something went wrong... please check logs"});
    }
});

module.exports = app => app.use('/adventurers', router);