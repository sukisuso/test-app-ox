'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Answer = new mongoose.Schema({
  userName: { 
    type: String,
    required: true,
  },
  test: { 
    type: Schema.Types.ObjectId, 
    ref: 'Test', 
  },
  answers: { 
    type: Array,
    required: true,
  },
});

mongoose.model('Answer', Answer);
