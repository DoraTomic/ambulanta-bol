const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('ambulanta-de/index');
})
router.get('/tim', (req, res) => {
    res.render('ambulanta-de/tim');
})
router.get('/usluge', (req, res) => {
    res.render('ambulanta-de/usluge');
})
router.get('/turisticka', (req, res) => {
    res.render('ambulanta-de/turisticka');
})
router.get('/galerija', (req, res) => {
    res.render('ambulanta-de/galerija');
})
router.get('/kontakt', (req, res) => {
    res.render('ambulanta-de/kontakt');
})

module.exports = router;