'use strict';

const mongoose = require('mongoose');

const Test = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    index: { unique: true } 
  },
  description: { 
    type: String,
    required: true 
  },
  questions: { 
    type: Array,
    required: true
  },
});

mongoose.model('Test', Test);