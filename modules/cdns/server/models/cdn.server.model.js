'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Cdn Schema
 */
var CdnSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name cannot be blank'
  },
  url: {
    type: String,
    default: '',
    trim: true,
    required: 'Url cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  version: {
    type: String,
    default: '',
    trim: true
  },
  type: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Cdn', CdnSchema);
