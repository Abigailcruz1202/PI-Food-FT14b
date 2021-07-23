const { Router } = require('express');
//const  APIKEY  = process.env.APIKEY;
const APIKEY='633708ff4d2744ffad1bed27a46a3887'
const axios = require('axios');
const { Diet } = require('../db')
const Sequelize = require('sequelize');

const router = Router();

router.get('/types', async(req, res, next) =>{
   let types = ['Gluten Free','Ketogenic', 'Vegetarian','Lacto-Vegetarian','Ovo-Vegetarian','Vegan','Pescetarian', 'Paleo','Primal','Whole 30'];//tipos de dietas para pre cargar la base de datos(UNA FORMA DE HACER)
  let db = await Diet.findAll()
  console.log(db.length,'db')
  if(db.length === 0 ){
    types.forEach((element)=>{
      let dietsTypes = element
      Diet.findOrCreate({
        where:{
          name:dietsTypes
        }
      })
    })
    console.log(db,'db?')
    return res.status(200).send('registro exitoso')
   }else{
    try{
      let recipesDb = await Diet.findAll({
       attributes: ['name']
      })
      //console.log(recipesDb)
      return res.status(200).send(recipesDb)
    }  
    catch(error){
      console.log(error) 
      res.sendStatus(400)
    }
  }
})
  
module.exports = router;



// if(db.length === 0){
//   console.log('estoy abajo del if')
//   try{
//     console.log('estoy abajo del try')
//     let dietsAll = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true`)
//     let diets = dietsAll.data.results
//      //console.log('todo?','prueba')
//      //console.log(diets)
//     diets.map((elemento)=>{
//       let dietsTypes = elemento.diets;
//       console.log(dietsTypes)
//       dietsTypes.forEach(element => {
//         let names = element
//         //console.log(names)
//         Diet.findOrCreate({
//           where:{
//             name:names
//           }
//         })
//       });
//     })
//     //console.log(names,'?')
//     return res.status(200).send('registro exitoso')
//   }
//   catch(error){
//     res.status(400).send('no se hizo el registro')
//   }
// }else{
//   try{
//     let recipesDb = await Diet.findAll({
//       attributes:['id','name']
//     })
//     console.log(recipesDb)
//     return res.status(200).send('tipos de dietas de db')
//   }  
//   catch(error){
//     res.sendStatus(400)
//   }
// }
// })