const express = require('express');
const router = express.Router();
const Rezept = require('./models/rezept');

// get all rezepte
router.get('/rezepte', async(req, res) => {
    const allRezepte = await Rezept.find();
    console.log(allRezepte);
    res.send(allRezepte);
});

// post one rezept
router.post('/rezepte', async(req, res) => {
    const newRezept = new Rezept({
        Name: req.body.Name,
        Portion: req.body.Portion,
    })
    await newRezept.save();
    res.send(newRezept);
});

module.exports = router;
