
(function ($) {
	'use strict';

	$(document).ready(function () {
		setTimeout(() => $('.log-1').show(), 3000);
		setTimeout(() => $('.log-2').show(),6000);
		setTimeout(() => $('.log-3').show(), 9000);
		setTimeout(() => $('#scoreModal').modal('show'), 12000);
		setTimeout(() => $('#end-popup').modal('show'), 15000);
		$('.close').on('click', function () {
			$('#end-popup').modal('hide');
		});
	});
})(jQuery);
