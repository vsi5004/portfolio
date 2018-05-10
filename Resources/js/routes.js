
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/portfolio", {
        templateUrl : "portfolio.html"
    })
	.when("/cv", {
        templateUrl : "cv.html"
    })
    .when("/contact", {
        templateUrl : "contact.html",
		controller:"contactCtrl"
    });
	
	$locationProvider.html5Mode(true);
});


