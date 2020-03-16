const router = require('express').Router(),
  Example = require('../models/example.model.js')
    
  router.route('/').get((req, res) => {
    Example.find()
      .then(data => res.status(200).json(data))
      .catch(err => console.log('Error: ' + err));
  })
  
module.exports = router;