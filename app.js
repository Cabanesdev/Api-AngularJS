var app = angular.module('myApp', []);
app.controller('myCtrl', ($scope, $http) => {
	$scope.prueba = () => {
		const randomRange = Math.floor(Math.random() * 17050);
		$http
			.get(
				`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${randomRange}`
			)
			.then((response) => {
				const data = response.data.data;
				$scope.animes = data;
			});
	};

	$scope.prueba();

	$scope.getAnimes = (input) => {
		$scope.input = input.toLowerCase();
		let url = 'https://kitsu.io/api/edge/anime?page[limit]=20';
		if (!$scope.input)
			url = `https://kitsu.io/api/edge/anime?filter[text]=${input}&page[limit]=20`;
		$http.get(url).then((response) => {
			const data = response.data.data;
			$scope.animes = data;
		});
	};
});
