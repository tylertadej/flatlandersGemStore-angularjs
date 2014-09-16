(function () {

	var app = angular.module('gemStore', ['store-directives']);
	// 'store-directives' dependency located in products.js

	app.controller('StoreController', [ '$http', function ($http) {
		var store = this;
		store.products = [];
		$http.get('settings/store-products.json').success(function (data) {
			store.products = data;
		});
	}]);

	app.controller('ReviewController', function () {
		// Initialize property 'review' and set equal to empty object
		this.review = {};

		this.addReview = function (product) {
			// Add new review to reviews array
			product.reviews.push(this.review);
			// Set review to empty object again to clear out form
			this.review = {};
		};
	});

})();