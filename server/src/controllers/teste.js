const mongoose = require('mongoose');

module.exports = function(app){
  let api = {};
   let model = mongoose.model('pops');

  api.teste = (req,res)=>{
    model.find()
    .then(function(pop){
      res.json(pop)
    }, function(error){
      console.log(error);
      res.sendStatus(500);
    });
  }

  return api;
  
};
