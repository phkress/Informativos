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
  tratativas:{
    type: Array,
    required: true
  }
});

mongoose.model('bu', schema);
