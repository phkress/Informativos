const mongoose = require('mongoose');

module.exports = function(app){
  let api = {};
   let model = mongoose.model('bu');

  api.index = (req,res)=>{
    model.find()
    .then(function(data){
      res.json(data)
    }, function(error){
      console.log(error);
      res.sendStatus(500);
    });
  },
  api.findById = (req,res) =>{
    model.findById(req.params.id)
    .then(function(data) {
      if (!data) throw new Error('Bu não encontrado');
      res.json(data);
    }, function(error) {
      console.log(error);
      res.sendStatus(500);
    });
  }
  return api;

};
