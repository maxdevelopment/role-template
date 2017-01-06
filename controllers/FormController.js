var FormModel = require('../models/Forms').FormModel;

exports.create = function (req, res) {
  console.log(req.body);

  var JobForm = new FormModel({
    full_name: req.body.username,
    // birth_date: req.body.birthdate,
    address: req.body.address,
    phone: req.body.phone,
    position: req.body.position,
    rests: req.body.cafe,
    updated: Date.now()
  });

  JobForm.save()
    .catch(function (err) {
      // res.json({success: false, msg: err.message});
      console.log(err.message);
    })
    .then(function () {
      res.json({success: true, msg: 'Successful created.'});
    });
};
