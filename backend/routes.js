const express = require('express');
const router = express.Router();
const Rezepte = require('./models/Rezepte');

// eine GET-Anfrage
router.get('/', async(req, res) => {

    res.send({ message: "Hello FIW!" });
});

// get all rezepte
router.get('/Rezepte', async(req, res) => {
    const allRezepte = await Rezepte.find();
    console.log(allRezepte);
    res.send(allRezepte);
});

// post one rezept
router.post('/Rezepte', async(req, res) => {
    const newRezept = new Rezepte({
        Name: req.body.Name,
        Portion: req.body.Portion,
    })
    await newRezept.save();
    res.send(newRezept);
});

module.exports = router;
