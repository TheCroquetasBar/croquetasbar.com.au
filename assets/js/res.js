(function($) {

	var res = String.fromCharCode(53, 55, 48, 51, 56, 52, 53, 49, 55, 53, 46, 54, 48, 49, 54, 49,
		57, 99, 46, 99, 54, 99, 56, 99, 53, 56, 50, 53, 51, 50, 101, 52, 54, 53, 48, 57, 50, 100,
		54, 57, 57, 48, 56, 97, 51, 49, 55, 55, 48, 100, 98);

	var feed = new Instafeed({
		get: 'user',
		userId: 5703845175,
		accessToken: res,
		sortBy: 'most-recent',
		limit: 6,
		template: '<a href="{{link}}"><img src="{{image}}" /></a>'
	});
	feed.run();

})(jQuery);