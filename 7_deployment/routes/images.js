var async = require('async');
var express = require('express');
var fs = require('fs');
var gm = require('gm');
var imageMagick = gm.subClass({ imageMagick: true });

var router = express.Router();

/* get upload form */
router.get('/', function (req, res) {
  res.render('upload', { title: 'Express' });
});

/* accept multi-part posted images */
router.post('/', function (req, res, next) {

  /* create a function which can be used for each image we want to create */
  function resize (size, cb) {
    /* the uploaded file can be found as `req.files.image` */
    imageMagick(req.files.image.path)
      .resize(size, size)
      .stream('png', function (err, stdout, stderr) {
        if (err) return cb(err);
        /* in a real app, you'd associate these with the user and store them
           some place where you can manage disk space requirements, etc.
           examples: S3, CDN, Mongo GridFS. we'll just pipe to a file for
           simplicity */
        var one = fs.createWriteStream('/tmp/' + size + '.png');
        stdout.pipe(one);
        cb();
      });
  }
  
  console.log('resizing %s', req.files.image.name);

  /* execute the resize function for each of the images we want to create */
  async.map([150, 250, 500], resize, function (err) {
    res.render('images');
  })
});


module.exports = router;



