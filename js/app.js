app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
		$stateProvider
			.state('root', {
				abstract:true,
				views: {
					'@':{
						templateUrl: 'templates/layout.html'
					}, 
					'navbar@root':{
						templateUrl: 'templates/navbar.html'
					},
					'content@root':{
						templateUrl: 'templates/content.html'
					}
				}
			})
			.state('root.login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})
			.state('root.register', {
				url: '/register',
				templateUrl: 'templates/register.html',
				controller: 'registerCtrl'
			})
			.state('root.pokeapi', {
				url: '/pokeapi',
				templateUrl: 'templates/pokeapi.html',
				controller: 'pokeCtrl'
			})
})