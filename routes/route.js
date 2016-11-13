var schema=require('../models/nerd');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Nerd = mongoose.model('Nerds');

   

router.route('/nerds')
    .get(function(req,res){
        Nerd.find(function(err,nerds){
            if(err){
                return res.send(500, err);
            }
            return res.send(nerds);
        });
    });
module.exports = router;
