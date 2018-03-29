
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var storage = [];

// Render the home page:
app.get('/', function (req, res) {
	res.render('index', {
		list: storage
	});
})
.post('/', function (req, res) {
	var listItem = req.body.listItem;

	if (/([a-zA-Z0-9])/.test(listItem)) {
		var item = {
			id: new Date().getTime(),
			item: listItem
		};
		storage.unshift(item);
	}
	res.redirect('/');
});

app.post('/delete', function (req, res) {
	var id = Number(req.body.delete);
	storage.forEach(function (item, i, self) {
		if (item.id === id) {
			self.splice(i, 1);
		}
	});
	res.redirect('/');
});

app.listen(3000);
