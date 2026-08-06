const express = require('express');
const Model = require ('../models/UserModels');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    //res.send('response from user add');
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// : denotes url parameter
router.get('/getbycity/:city', (req,res) => {
    Model.find({city: req.params.city})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getbyemail/:email', (req,res) => {
    Model.find({email: req.params.email})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.get('/getbyid', (req, res) => {
    res.send('response from user getbyid');
});

router.get('/update', (req, res) => {
    res.send('response from user update');
});

router.get('/delete', (req, res) => {
    res.send('response from user delete');
});



module.exports = router;