const mongoose = require('mongoose');

const schema = mongoose.Schema({
  bu:{
    type:String,
    required: true
  },
  empresa:{
    type:String,
    required:true
  },
  procedimentos:{
    type: String,
    required: true
  },
  link:{
    type: String,
    required: true
  },
  informacoes:{
    type: Array,
    required: false
  },
  tecnico:{
    type: Array,
    required: false
  },
  financeiro:{
    type: Array,
    required: false
  },
  comercial:{
    type: Array,
    required: false
  },
});

mongoose.model('bu', schema);
