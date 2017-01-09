var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;
var db = require('../config/database').db;

var phoneValidator = [
  validate({
    validator: 'isNumeric',
    passIfEmpty: false,
    message: 'Phone should contain digits only'
  })
];

var FormSchema = new Schema({
    worksheet_status: {
      type: Number,
      default: 1
    },
    name: {
      last: String,
      first: String,
      middle: String
    },
    birth_date: {
      type: Date,
      required: true
    },
    address: {
      type: String,
      trim: true,
      required: true
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      validate: phoneValidator
    },
    position: {
      type: String,
      required: true,
      trim: true
    },
    rests: {
      type: Array
    },
    how_long: {
      type: String
    },
    educations: {
      type: Schema.Types.Mixed
    },
    experience: {
      type: Schema.Types.Mixed
    },
    driving_experience: {
      type: Number
    },
    own_car: {
      type: Boolean
    },
    fuel_consumption: {
      type: Number
    },
    tags: {
      type: Schema.Types.Mixed
    },
    comments: {
      type: Schema.Types.Mixed
    },
    created: {
      type: Date,
      default: Date.now
    },
    updated: {
      type: Date
    }
  },
  {
    toObject: {virtuals: true, getters: true},
    toJSON: {virtuals: true, getters: true}
  }
);

FormSchema.path('worksheet_status').get(function (value) {
  switch (value) {
    case 1:
      return 'new';
    case 2:
      return 'work';
    case 3:
      return 'archive';
    default:
      return 'unknown';
  }
});

FormSchema.virtual('full_name').get(function () {
  return this.name.last + ' ' + this.name.first + ' ' + this.name.middle;
});

FormSchema.virtual('full_name').set(function (name) {
  var split = name.split(' ');
  this.name.last = split[0];
  this.name.first = split[1];
  this.name.middle = split[2];
});

var FormModel = db.model('JobForm', FormSchema);
module.exports.FormModel = FormModel;
