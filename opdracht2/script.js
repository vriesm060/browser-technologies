
// Fallback for details tags:
// Replace functionality with custom one build with javascript

var person = document.getElementsByClassName('person');
var summary = document.getElementsByClassName('summary');

if (document.createElement('details').open === undefined) {
	console.log('does not support');

	var accordion = {
		person: person,
		summary: summary,
		init: function () {
			for (var i = 0; i < this.summary.length; i++) {
				this.summary[i].className += ' close';
			}
		},
		openAccordion: function (summary) {
			summary.className = summary.className.slice(0, summary.className.indexOf(' close'));
		},
		closeAccordion: function (summary) {
			summary.className += ' close';
		}
	};

	accordion.init();

	for (var i = 0; i < accordion.summary.length; i++) {
		accordion.summary[i].addEventListener('click', function () {
			if (this.className.indexOf('close') !== -1) {
				accordion.openAccordion(this);
			} else {
				accordion.closeAccordion(this);
			}
		}, false);
	}
}

for (var i = 0; i < summary.length; i++) {
	summary[i].addEventListener('click', function () {

		var button = this.getElementsByTagName('button')[0];

		if (window.getComputedStyle(button).getPropertyValue('transform') === undefined) {
			console.log('does not exist');

			if (button.innerHTML === '&vee;') {
				button.innerHTML = '&wedge;';
			} else {
				button.innerHTML = '&vee;';
			}

		} else {
			console.log('does exist');
				
			if (button.classList.contains('open')) {
				button.classList.remove('open');
			} else {
				button.classList.add('open');
			}

		}

	}, false);
}
