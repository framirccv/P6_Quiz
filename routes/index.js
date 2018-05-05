const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Author page.
router.get('/author', (req, res, next) => {
    res.render('author');
});


// Autoload for routes using :quizId
router.param('quizId', quizController.load);


// Routes for the resource /quizzes
router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',                    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);

router.get('/quizzes/:quizId(\\d+)/play',  quizController.play);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);

//el hiperenlace play de la vista principal es /quizzes/randomplay, es decir, cuando le damos se ejecuta tal función
//la cual hemos definido el archivo quiz dentro de controllers
router.get('/quizzes/randomplay',          quizController.randomplay);

//creamos una funcion que compruebe si lo que ha puesto el usuario es correcto
//se ejecuta la funcion cuando le damos a check en la vista de random_play
router.get('/quizzes/randomcheck/:quizId(\\d+)',  quizController.randomcheck);



module.exports = router;
