
// If JS is enabled AND
// If setInterval() is supported:

if (window.setInterval !== undefined) {
	console.log('does exist');

	var carrousel = document.getElementsByClassName('carrousel')[0];
	var prevBtn = document.getElementsByClassName('prev-btn')[0];
	var nextBtn = document.getElementsByClassName('next-btn')[0];

	// Make the carrousel inline:
	carrousel.className += ' inline';
	prevBtn.className += ' inline';
	nextBtn.className += ' inline';

	function slider() {

		var carrouselContainer = document.getElementsByClassName('carrousel--container')[0];
		var slide = carrouselContainer.children;

		var idx = 0;

		function start(idx) {
			carrouselContainer.style.left = (idx * -100) + '%';
		}
		start(idx);

		setInterval(function () {

			if (idx === slide.length - 1) {
				idx = 0;
			} else {
				idx++;
			}
			start(idx);

		}, 5000)

		prevBtn.addEventListener('click', function (e) {
			if (idx === 0) {
				idx = slide.length -1;
			} else {
				idx--;
			}
			start(idx);
			e.preventDefault();
		}, false);

		nextBtn.addEventListener('click', function (e) {
			if (idx === slide.length - 1) {
				idx = 0;
			} else {
				idx++;
			}
			start(idx);
			e.preventDefault();
		}, false);

	}
	slider();

} else {
	console.log('does not exist');
}
