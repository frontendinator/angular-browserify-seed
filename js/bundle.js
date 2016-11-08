	angular.module('expressly', ['ngRoute', 'singlePhoto', 'singleAlbum'])
		   .controller('startController', function($scope, $http) {
        		$http.get('http://jsonplaceholder.typicode.com/photos').then(function(response) {
        			$scope.photos = response.data;
    			});
			})
 			.config(function($routeProvider) {
        		$routeProvider
            	.when("/", {
            		templateUrl : "templates/photolist.html"
            	})
	            .when("/image/:id", {
	            	template : '<single-photo></single-photo>'
	            })
	            .when("/album/:id", {
	            	template : "<single-album></single-album>"
	            })
	            .otherwise({
	                redirectTo: '/'
	            });
    		});

    angular.module('singlePhoto', ['ngRoute'])
    	   .component('singlePhoto', {
    			templateUrl: 'templates/image.html',
    			controller: ['$scope', '$http', '$routeParams',
      			function SinglePhotoController($scope, $http, $routeParams) {
        			$http({
        				url:"http://jsonplaceholder.typicode.com/photos",
        				params: {id:$routeParams.id},
        				method: "get"
        			})
					.then(function(response) {
        				$scope.phot = response.data;
    				});
      			}]
  			});

   	angular.module('singleAlbum', ['ngRoute'])
    	   .component('singleAlbum', {
    			templateUrl: 'templates/album.html',
    			controller: ['$scope', '$http', '$routeParams',
      			function AlbumController($scope, $http, $routeParams) {
        			$http({
        				url:"http://jsonplaceholder.typicode.com/photos",
        				params: {albumId:$routeParams.id},
        				method: "get"
        			})
					.then(function(response) {
        				$scope.alb = response.data;
    				});
      			}]
  			});