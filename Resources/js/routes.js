var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/portfolio", {
        templateUrl : "portfolio.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
		controller:"contactCtrl"
    });
});