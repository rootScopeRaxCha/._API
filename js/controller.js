let app = /**
* app Module
*
* Description
*/
angular.module('app', ['ui.router', 'ngAnimate']);
app.controller('loginCtrl' ,function($scope) {
})

app.controller('registerCtrl' ,function($scope) {
})

app.controller('pokeCtrl' ,function($scope, $rootScope, $http) {
	$rootScope.datas = [];
	for( let i = 1; i < 202; i++ ) {
		$http({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/'+i+'/'
		}).then(function getData(snapshot) {
			$rootScope.datas.push(snapshot);
		});
	};
})
