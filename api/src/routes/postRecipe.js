const { Router } = require('express');
//const  APIKEY  = process.env.APIKEY;
const APIKEY = '633708ff4d2744ffad1bed27a46a3887'
const axios = require('axios');
const { Recipe, Diet } = require('../db')
const router = Router();

// Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso

router.post('/', async (req, res) => {
    //console.log('probando')
    const { name, summary, spoonacularScore, healthScore, instructions } = req.body;
    if (name && summary) {
        //console.log('estoy en if')
        const recipe = await Recipe.create({
            name,
            summary,
            spoonacularScore,
            healthScore,
            instructions,
        })
        return res.status(200).send(recipe);
    } else {
        //console.log('?')
        return res.status(404).send('Lo siento hubo un error')
    }
    //res.sendStatus(200)//probando
})

// router.post('/recipe', async function (req, res) {
//     const { title, summary, spoonacularScore, healthScore, instructions } = req.body
//     try {
//         let recipes = await Recipe.findOrCreate({
//             where: { title, summary, spoonacularScore, healthScore, instructions }
//         })
//         //recipes.setDiets(diets)????
//         return res.status(200).send(recipes)
//     }
//     catch {
//         res.status(404).send("Lo siento hubo un error")
//     }
// });

module.exports = router;