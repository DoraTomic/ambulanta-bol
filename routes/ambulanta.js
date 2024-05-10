const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('ambulanta/index');
})
router.get('/tim', (req, res) => {
    res.render('ambulanta/tim');
})
router.get('/usluge', (req, res) => {
    res.render('ambulanta/usluge');
})
router.get('/turisticka', (req, res) => {
    res.render('ambulanta/turisticka');
})
router.get('/galerija', (req, res) => {
    res.render('ambulanta/galerija');
})
router.get('/kontakt', (req, res) => {
    res.render('ambulanta/kontakt');
})

module.exports = router;