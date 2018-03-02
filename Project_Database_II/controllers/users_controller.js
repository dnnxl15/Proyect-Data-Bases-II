var crypto = require('crypto');
var mongoose = require('mongoose');
	User = mongoose.model('Student');

function hashPW(pwd){
	return crypto.createHash('sha256').update(pwd).
		digest('base64').toString();
}

exports.signup = function(req, res){
	var user = new User({username: req.body.username});
	user.set('hashed_password', hashPW(req.body.password));
	user.set('email', req.body.email);
	user.save(function(err){
		if(err){
			res.session.error = err;
			res.redirect('/signUp');
		}else{
			req.session.user = user.id;
			req.session.username = user.username;
			req.session.msg = 'Authenticated as ' + user.username;
			res.redirect('/');
		}
	});
};

exports.login = function(req, res){
	User.findOne({username: req.body.username})
	.exec(function(err, user){
		if(!user){
			err = 'User not found.';
		}else if(user.hashed_password === hashPW(req.body.password.toString())){
			req.session.regenerate(function(){
				req.session.user = user.id;
				req.session.username = user.username;
				req.session.msg = 'Authenticated as ' + user.username;
				res.redirect('/');
			});
		}else{
			err = 'Authentication failed.';
		}
		if(err){
			req.session.regenerate(function(){
				req.session.msg = err;
				res.redirect('/homepage');
			});
		}
	});
};


exports.add = function(req, res) {
 var client = new Client({
 name: req.body.name
 });
 client.save(function(err, client) {
 if(err) return res.status(500).send(err.message);
 res.status(200).json(client);
 });
};
