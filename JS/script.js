(function() {
	var app = angular.module('marsApp', []);


app.controller('RegisterFormCtrl', ['$scope', function($scope) {
$scope.jobs= [ 'Janitor', 'Alien Hunter', 'Dust Farmer'];
$scope.showValidation= false;
$scope.submitRegistration = function (e, form){
	e.preventDefault()
	console.log(form);

if ($scope.myForm.$invalid){
	$scope.showValidation = true;
};
if(showValidation){
	
}
}
}])






app.controller('ReportFormCtrl', ['$scope', function($scope) {
$scope.aliens= [ 'Lizard Man', 'Giant Slug'];
$scope.showValidation= false;
$scope.submitRegistration = function (e, form){
	
	e.preventDefault()
	console.log(form);
if ($scope.myForm.$invalid){
	$scope.showValidation = true;
};
alert('test')

}
}])

})();
