var FormModel = require('../models/Forms').FormModel;

exports.create = function (req, res) {

  var JobForm = new FormModel({
    full_name: req.body.username,
    birth_date: req.body.birthdate,
    address: req.body.address,
    phone: req.body.phone,
    position: req.body.position,
    rests: req.body.cafe,
    work_duration: req.body.how_long,
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
