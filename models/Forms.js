var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../config/database').db;

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
      required: true
    },
    position: {
      type: String,
      required: true,
      trim: true
    },
    rests: {
      type: Schema.Types.Mixed
    },
    work_duration: {
      type: String,
      trim: true
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
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

FormSchema.virtual('status').get(function () {
  switch (this.worksheet_status) {
    case 1:
      return 'new';
    default:
      return 'max.n status';
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
