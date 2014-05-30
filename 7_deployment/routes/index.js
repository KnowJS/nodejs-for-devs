exports.index = function (req, res) {
  res.render('index', { title: 'Express' });
};

exports.upload = function (req, res) {
  res.render('upload', { title: 'Express' });
}

var gm = require('gm')
  , imageMagick = gm.subClass({ imageMagick: true });

exports.resize = function (req, res, next) {
  // the uploaded file can be found as `req.files.image` and the
  // title field as `req.body.title`
  console.log('resizing %s', req.files.image.name);
  imageMagick(req.files.image.path)
    .resize(150, 150)
    .stream('png', function (err, stdout, stderr) {
      if (err) return cb(err);
      stdout.pipe(res);  
    });
};
