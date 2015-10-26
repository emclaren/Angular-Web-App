 

(function() {

	var app = angular.module('marsApp', ['ui.router', 'ngAnimate','ngCookies']);

 

app.run(function($rootScope){
   $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
     $rootScope.stateName = toState.name;
   });
 });

app.config(['$stateProvider', 
					'$urlRouterProvider',
					'$locationProvider',
					function($stateProvider,
							$urlRouterProvider,
							$locationProvider){
						$locationProvider.html5Mode({
							enabled: true,
							requireBase:false,
							reqriteLinks: false
						});

						$stateProvider
							.state('welcome', {
								url: '/',
								templateUrl:'mainpage.html',
								controller: ['$cookies', function($cookies){
									$cookies.putObject('mars_user', undefined);
								}],
								controllerAs: 'welcome'
							})
								.state('page2', {
								url: '/page2',
								templateUrl:'checkin.html',
								controller:'RegisterFormCtrl',
								resolve: {
									user:['$cookies', function($cookies){
									if($cookies.getObject('mars_user')){
										$state.go('page3');
									}
									}]
								}}
								)
								.state('page3', {
								url: '/page3',
								templateUrl:'encounters.html',
								controller: 'encountersCtrl',
							})
								.state('page4', {
								url: '/page4',
								templateUrl:'report.html',
								controller:'ReportFormCtrl',
							});
					}]);

app.controller('RegisterFormCtrl', ['$scope','$cookies', '$state', '$http', function($scope, $cookies, $state, $http) {

	var API_URL_GET_JOBS = "https://red-wdp-api.herokuapp.com/api/mars/jobs";
	var API_URL_CREATE_COLONIST = "https://red-wdp-api.herokuapp.com/api/mars/colonists";

		$scope.colonist ={};
		$http.get(API_URL_GET_JOBS).then(function(response){
			$scope.jobs=response.data.jobs;
		});
  
		$scope.showValidation= false;
		$scope.submitRegistration = function (e, form){
			e.preventDefault();
			console.log(form);
		if ($scope.myForm.$invalid){
			$scope.showValidation = true;
		} else{
			$http({
				method:'POST',
				url:API_URL_CREATE_COLONIST,
				data: {colonist: $scope.colonist }
			}).then(function(response){
			$cookies.putObject('mars_user', response.data.colonist);
			$state.go('page3');
		});
	}
};
}]);

app.controller('encountersCtrl', [ '$scope','$http', function($scope, $http){
	var ENCOUNTERS_API_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
		$http.get(ENCOUNTERS_API_URL).then(function(response){
			$scope.encounters=response.data.encounters;
		});
	}]);

app.controller('ReportFormCtrl', ['$scope', function($scope) {
$scope.aliens= [ 'The Coneheads', 'ET', 'ALF', 'Mork', 'Lizard Man', 'Kang & Kodos', 'Giant Slug', 'Octospider', 'Spider Monster'];
$scope.showValidation= false;
$scope.submitReport = function (e, form){
	e.preventDefault();
	console.log(form);
if ($scope.myForm2.$invalid){
	$scope.showValidation = true;
} else{
alert('Report filed!');
}
};
}]);

})();
