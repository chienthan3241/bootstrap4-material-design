var express = require('express');
var router = express.Router();
const _ = require('lodash');
const path = require('path');
const dirTree = require('directory-tree');
const tree = dirTree('./public/cloud', {extensions:/\.(pdf|docx|jpg|dxf|dwg)/});



/* GET wir bretonen. */
router.get('/', function(req, res, next) {
	//console.log(path.resolve(rootdir));
	console.log(tree);
	res.render('bretonen', { title: 'Wir Bretonen', dirArr: tree });
	
});

/* GET wir bretonen. */
router.get('/download/:file(*)', function(req, res) {
	var file = req.params.file;
	res.download(path.join('./',file));
});


module.exports = router;