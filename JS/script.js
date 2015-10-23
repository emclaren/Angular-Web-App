(function() {

	var app = angular.module('marsApp', ['ui.router', 'ngCookies']);


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
								templateUrl:'encounters.html'
							})
								.state('page4', {
								url: '/page4',
								templateUrl:'report.html',
								controller:'ReportFormCtrl'
							})
					}]);

		

app.controller('RegisterFormCtrl', ['$scope','$cookies', '$state', '$http', function($scope, $cookies, $state, $http) {

	var API_URL_GET_JOBS = "https://red-wdp-api.herokuapp.com/api/mars/jobs";
	var API_URL_CREATE_COLONIST = "https://red-wdp-api.herokuapp.com/api/mars/colonists";

		$scope.colonist ={};
		$http.get(API_URL_GET_JOBS).then(function(response){
			$scope.jobs=response.data.jobs;
		})
		// $scope.jobs= [ 'Janitor', 'Alien Hunter', 'Dust Farmer'];
		$scope.showValidation= false;
		$scope.submitRegistration = function (e, form){
			e.preventDefault()
			console.log(form);
		if ($scope.myForm.$invalid){
			$scope.showValidation = true;
		} else{
			$http({
				method:'POST',
				url:API_URL_CREATE_COLONIST,
				data: {colonist: $scope.colonist }
			}).then(function(response){

			$cookies.putObject('mars_user', response.data.colonist)

			$state.go('page3');
			debugger;
		})
	}

}
}])


app.controller('ReportFormCtrl', ['$scope', function($scope) {
$scope.aliens= [ 'Lizard Man', 'Giant Slug'];
$scope.showValidation= false;
$scope.submitReport = function (e, form){
	e.preventDefault()
	console.log(form);
if ($scope.myForm2.$invalid){
	$scope.showValidation = true;
} else{
alert('Report filed!');
}
}
}])

})();


