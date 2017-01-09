var FormModel = require('../models/Forms').FormModel;

exports.create = function (req, res) {

  var JobForm = new FormModel({
    full_name: req.body.username,
    birth_date: req.body.birthdate,
    address: req.body.address,
    phone: req.body.phone,
    position: req.body.position,
    rests: req.body.cafes,
    how_long: req.body.how_long,
    educations: req.body.educations,
    experience: req.body.experience,
    driving_experience: req.body.driving_experience,
    own_car: req.body.own_car,
    fuel_consumption: req.body.fuel_consumption,
    updated: Date.now()
  });

  JobForm.save()
    .then(function () {
      return res.json({success: true, msg: 'Successful created.'});
    }, function (err) {
      var errors = [];
      for (var key in err.errors) {
        errors.push({key: key, msg: err.errors[key].message});
      }
      return res.json({success: false, msg: errors});
    });
};
