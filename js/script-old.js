
(function() {
	var app = angular.module('marsApp', ['ui.router','ngCookies','ngAnimate', 'ngTouch'])
	app.run(function($rootScope){
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			$rootScope.stateName = toState.name;
		});
	});
	// app.config(['$stateProvider', 
	// 	'$urlRouterProvider',
	// 	'$locationProvider',
	// 	function($stateProvider,
	// 		$urlRouterProvider,
	// 		$locationProvider){
	// 		$locationProvider.html5Mode({
	// 			enabled: false,
	// 			requireBase:false,
	// 			reqriteLinks: false
	// 		});


	// 		$stateProvider
	// 		.state('welcome', {
	// 			url: '',
	// 			templateUrl:'mainpage.html',
	// 			controller: ['$cookies', '$state', '$scope', function($cookies, $state, $scope){
	// 				$scope.swipeLeft =function(){
	// 					$state.go('page2');
	// 				}
	// 				$cookies.putObject('mars_user', undefined);
	// 			}],
	// 			controllerAs: 'welcome'
	// 		})
	// 		.state('page2', {
	// 			url: '/page2',
	// 			templateUrl:'checkin.html',
	// 			controller:'RegisterFormCtrl',
	// 			resolve: {
	// 				user:['$cookies', function($cookies){
	// 					if($cookies.getObject('mars_user')){
	// 						$state.go('page3');
	// 					}
	// 				}]
	// 			}
	// 		})
	// 		.state('page3', {
	// 			url: '/page3',
	// 			templateUrl:'encounters.html',
	// 			controller: 'encountersCtrl',
	// 		})
	// 		.state('page4', {
	// 			url: '/page4',
	// 			templateUrl:'report.html',
	// 			controller:'ReportFormCtrl',
	// 		});
	// 	}]);

	// app.controller('RegisterFormCtrl', ['$scope','$cookies', '$state', '$http', function($scope, $cookies, $state, $http) {

	// 	var API_URL_GET_JOBS = "https://red-wdp-api.herokuapp.com/api/mars/jobs";
	// 	var API_URL_CREATE_COLONIST = "https://red-wdp-api.herokuapp.com/api/mars/colonists";

	// 	$scope.colonist ={};
	// 	$http.get(API_URL_GET_JOBS).then(function(response){
	// 		$scope.jobs=response.data.jobs;
	// 	});

	// 	$scope.showValidation= false;
	// 	$scope.submitRegistration = function (e, form){
	// 		e.preventDefault();
	// 		if ($scope.myForm.$invalid){
	// 			$scope.showValidation = true;
	// 		} else{
	// 			$http({
	// 				method:'POST',
	// 				url:API_URL_CREATE_COLONIST,
	// 				data: {colonist: $scope.colonist }
	// 			}).then(function(response){
	// 				$cookies.putObject('mars_user', response.data.colonist);
	// 				$state.go('page3');
	// 			});
	// 		}
	// 	};
	// }]);
	

	// app.controller('encountersCtrl', [ '$scope','$http', function($scope, $http){
	// 	var ENCOUNTERS_API_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
	// 	$http.get(ENCOUNTERS_API_URL).then(function(response){
	// 		$scope.encounters=response.data.encounters;
	// 	});
	// }]);

	// app.controller('ReportFormCtrl', ['$scope','$http', '$cookies', '$filter', function($scope, $http, $cookies, $filter) {
	// 	var ALIEN_TYPE_API_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
	// 	var ENCOUNTERS_API_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

	// 	$scope.encounter ={};
	// 	$http.get(ALIEN_TYPE_API_URL).then(function(response){
	// 		$scope.aliens=response.data.aliens;
	// 	});

	// 	$scope.encounter.date =  $filter('date')(new Date(), 'yyyy-MM-dd');
	// 	$scope.encounter.colonist_id = $cookies.getObject('mars_user').id;

	// 	$scope.showValidation= false;
	// 	$scope.submitReport = function (e, form){
	// 		e.preventDefault();
	// 		if ($scope.myForm2.$invalid){
	// 			$scope.showValidation = true;
	// 		} else {
	// 			$http({
	// 				method:'POST',
	// 				url: ENCOUNTERS_API_URL,
	// 				data: {encounter: $scope.encounter }
	// 			}).then(function(response){
	// 				alert('Report filed!');
	// 			});
	// 		}
	// 	};
	// }]);

})();
// var controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
//         duration: 100,    // the scene should last for a scroll distance of 100px
//         offset: 50        // start this scene after scrolling for 50px
//     })
//     .setPin("#about") // pins the element for the the scene's duration
//     .addTo(controller); // assign the scene to the controller

    // controller.addScene(scene);



    $(function () { 

    	/* this defines the distance from the top */

    	$(window).scroll(function() {
    		var scrollTop = $(this).scrollTop()
    		console.log(scrollTop)
    	});



    	var controller = new ScrollMagic.Controller({

    		globalSceneOptions: {
    			duration:150,
    			offset: -30,
    			triggerHook: 'onLeave'
    		}

    	});

							// get all slides
							var slides = document.querySelectorAll(".test1");
							// create scene for every slide
							for (var i=0; i<slides.length; i++) {
								new ScrollMagic.Scene({
									triggerElement: slides[i]
								})
								.setPin(slides[i])
								// .addIndicators() // add indicators (requires plugin)
								.addTo(controller);
							}


							var controller2 = new ScrollMagic.Controller({
								globalSceneOptions: {
									triggerHook: 'onLeave'
								}
							});


							var med = document.querySelectorAll(".test2");
							// create scene for every slide
							for (var i=0; i<med.length; i++) {
								new ScrollMagic.Scene({
									triggerElement: med[i]
								})
								.setPin(med[i])
								// .addIndicators() // add indicators (requires plugin)
								.addTo(controller2);
							}

						});



						    var controller_about = new ScrollMagic.Controller({
						    	globalSceneOptions: {
						    		triggerHook: 'onLeave'
						    	}
						    });

    					var cv_about = document.querySelectorAll(".about-content");
							// create scene for every slide
							for (var i=0; i<cv_about.length; i++) {
								new ScrollMagic.Scene({
									triggerElement: cv_about[i]
								})
								.setPin(cv_about[i])
								// .addIndicators() // add indicators (requires plugin)
								.addTo(controller_about);
							}

