const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouts = require('./recipe.js')
const getTypes = require('./diets')
const postRecipe = require('./postRecipe')

const router = Router();

// Configurar los routersgetRecipes
// Ejemplo: router.use('/auth', authRouter);

router.use('/', getTypes)
router.use('/recipes', recipesRouts)
router.use('/recipe',postRecipe) 

module.exports = router;
