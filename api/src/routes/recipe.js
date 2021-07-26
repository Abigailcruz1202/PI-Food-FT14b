const { Router } = require('express');
//const  APIKEY  = process.env.APIKEY;
const APIKEY = '633708ff4d2744ffad1bed27a46a3887'
const axios = require('axios');
const { Recipe, Diet } = require('../db')
const router = Router(); 

router.get('/', async (req, res, next) => {
    console.log('???????????????')
    const { name } = req.query;
    if (name) {
        const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${name}&addRecipeInformation=true`)
        let recipesDb = await Recipe.findAll({
            where: { name: name }
        })
        let resultado = recipesApi.data.results;
        let results100 = resultado.slice(0, 100);
        let results = results100.map((element) => ({
            //id: element.id,
            title: element.title,
            image: element.image,
            diets: element.diets,
            healthScore: element.healthScore,
            // summary: element.summary, //resumen
            // spoonacularScore: element.spoonacularScore, //puntos
            // analyzedInstructions: element.analyzedInstructions //paso a paso
        }))
        console.log(results)
        let datos = results.concat(recipesDb);
        //let nueve = datos.slice(0, 9);

        if (datos.length === 0) {
            return res.status(404).send('no se encontro lo que buscaba') // si no coicide con alguna receta 
        }
        return res.status(200).send(datos) // si coidide con alguna receta

    }
    // imagen, nombre, tipo de dieta
    const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true`)
    let recipesDb = await Recipe.findAll()
    let resultado = recipesApi.data.results;
    let results100 = resultado.slice(0, 100);
    let results = results100.map((element) => ({
        //id: element.id,
        title: element.title,
        image: element.image,
        diets: element.diets,
        healthScore: element.healthScore,
        // summary: element.summary, //resumen
        // spoonacularScore: element.spoonacularScore, //puntos
        // analyzedInstructions: element.analyzedInstructions //paso a paso
    }))
    console.log(results)
    let datos = results.concat(recipesDb);
    res.send(datos)
})

// Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    //console.log(id,'id?')
    if (id.length < 32) {//32 es el numero de digitos que tiene Un UUID (Identificadores Únicos Universales)
        //let iD = Number(id) 
        try { //intenta hacer lo que hay entre LLAVES { }
            const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`)
            //console.log(recipesApi.data.analyzedInstructions[0].steps,'data?')
            let detail = []
            if (id === recipesApi.data.id.toString()) {
                //console.log(recipesApi.data.id.toString(), 'type', id, 'id')
                detail.push({
                    name: recipesApi.data.title,
                    image: recipesApi.data.image,
                    healthScore: recipesApi.data.healthScore,
                    spoonacularScore: recipesApi.data.spoonacularScore,
                    diets: recipesApi.data.diets,
                    instructions: recipesApi.data.instructions,
                    summary: recipesApi.data.analyzedInstructions[0].steps,

                })
                return res.send(detail)
            }
        }
        catch (error) {// si no se pudo resolver lo del TRY entra en CATCH capturando si hubo un error y 
            //console.log('estoy en cath')
            return res.status(404).send(error)
        }
    } else {
        try {
            const recipesDb = await Recipe.findOne({
                where: { id: id } // req.params.id
            })
            //console.log('db', recipesDb)
            return res.status(200).send(recipesDb)
        }
        catch (error) {
            //console.log('estoy en error db')
            return res.status(500).send(error)
        }
    }
    res.sendStatus(404)
})


module.exports = router;

// router.get('/', async (req, res, next) => {
//     const { name } = req.query;
//     if (name) {
//         const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${name}`)
//         let recipesDb = await Recipe.findAll({
//             where: { name: name }
//         })
//         let resultado = recipesApi.data.results;console.log(resultado,'resultado')
//         let results100 = resultado.slice(0, 100);
//         let datos = results100.concat(recipesDb);
//         //let nueve = datos.slice(0, 9);

//         if (datos.length === 0) {
//             return res.status(404).send('no se encontro lo que buscaba') // si no coicide con alguna receta 
//         }
//         return res.status(200).send(datos) // si coidide con alguna receta

//     }
//     // imagen, nombre, tipo de plato y tipo de dieta
//     const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}`)
//         let recipesDb = await Recipe.findAll()
//         let resultado = recipesApi.data.results;
//         let results100 = resultado.slice(0, 100);
//         let datos = results100.concat(recipesDb);
//         console.log(resultado,'resultado')
//     res.send(datos)
// })


// router.get('/:id', async (req, res, next)=>{
//     const { id } = req.params;
//     //console.log(id,'id?')
//     if(id){
//         let iD = Number(id) 
//         const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`)
//         //console.log(recipesApi.data.id,'data?')
//         let detail = []
//         if(iD === recipesApi.data.id){
//             detail.push({
//                 id:recipesApi.data.id,
//                 name:recipesApi.data.title,
//                 diets:recipesApi.data.diets
//         })
//             return res.send(detail)
//         }
//         return res.status(200).send('no se encontro coincidencia')
//         }
//         res.status(404).send('no hay id')
// })