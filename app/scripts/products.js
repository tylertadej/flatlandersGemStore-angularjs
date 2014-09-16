(function () {
	var app = angular.module('store-directives', []);

	app.directive("productTile", function () {
		return {
			restrict   : 'E', // 'E' for Element Directive
			templateUrl: "views/product-tile.html"
		};
	});

	app.directive("productGallery", function () {
		return {
			restrict    : 'E',
			templateUrl : "views/product-gallery.html",
			controller  : function () {
				this.currentIndex = 0;
				this.setCurrent = function (current) {
					this.currentIndex = current || 0;
				};
			},
			controllerAs: "gallery"
		};
	});

	app.directive("productTabs", function () {
		return {
			restrict    : 'E',
			templateUrl : "views/product-tabs.html",
			controller  : function () {
				this.tab = 1;

				this.isSet = function (checkTab) {
					return this.tab === checkTab;
				};

				this.setTab = function (activeTab) {
					this.tab = activeTab;
				};
			},
			controllerAs: "tab"
		};
	});

	app.directive("productReviews", function () {
		return {
			restrict   : 'E',
			templateUrl: "views/product-reviews.html"
		};
	});

})();
