var get = function(req, res) {
  res.json({success:true});
}

var post = function(req, res) {
  res.json({success:true});
}

var put = function(req, res) {
  res.json({success:true});
}

var deleteRoute = function(req, res) {
  res.json({success:true});
}

var funcs = { get, post, put, deleteRoute };

module.exports = funcs;
