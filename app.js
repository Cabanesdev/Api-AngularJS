var app = angular.module('myApp', []);
app.controller('myCtrl', ($scope, $http) => {
	$http
		.get('https://kitsu.io/api/edge/anime?filter[text]=sao')
		.then((response) => {
			let data = response.data.data;
			for (i = 0; i <= data.length; i++) {
				console.log(data[i]);
			}
		});
});
