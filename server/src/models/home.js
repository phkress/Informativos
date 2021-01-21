const mongoose = require('mongoose');

const schema = mongoose.Schema({

  procedimentos:{
    type: String,
    required: true
  },
  informacoes:{
    type: Array,
    required: false
  },
});

mongoose.model('home', schema);
