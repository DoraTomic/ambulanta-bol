const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('ambulanta-en/index');
})
router.get('/tim', (req, res) => {
    res.render('ambulanta-en/tim');
})
router.get('/usluge', (req, res) => {
    res.render('ambulanta-en/usluge');
})
router.get('/turisticka', (req, res) => {
    res.render('ambulanta-en/turisticka');
})
router.get('/galerija', (req, res) => {
    res.render('ambulanta-en/galerija');
})
router.get('/kontakt', (req, res) => {
    res.render('ambulanta-en/kontakt');
})

module.exports = router;