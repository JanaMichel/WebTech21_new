const express = require('express');
const router = express.Router();
const Rezepte = require('./models/Rezepte');

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
        Kategorie: req.body.Kategorie,
        Portion: req.body.Portion,
    })
    await newRezept.save();
    res.send(newRezept);
});



// post one Rezept via id
router.get('/Rezepte/:id', async(req, res) => {
    try {
        const rezepte = await Rezepte.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(rezepte);
    } catch {
        res.status(404);
        res.send({
            error: "Rezept nicht gefunden!"
        });
    }
});

// delete one Rezept via id
router.delete('/Rezepte/:id', async(req, res) => {
    try {
        await Rezepte.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Rezept nicht gefunden!" })
    }
});

// update one member
router.patch('/Rezepte/:id', async(req, res) => {
    try {
        const Rezepte = await Rezepte.findOne({ _id: req.params.id })

        if (req.body.Name) {
            Rezepte.name = req.body.Name
        }

        if (req.body.Kategorie) {
            Rezepte.kategorie = req.body.Kategorie
        }

        if (req.body.Portion) {
            Rezepte.portion = req.body.Portion
        }

        await Rezepte.updateOne({ _id: req.params.id }, Rezepte);
        res.send(Rezepte)
    } catch {
        res.status(404)
        res.send({ error: "Rezept nicht gefunden!" })
    }
});

module.exports = router;
