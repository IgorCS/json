angular.module('service.api', [])

.factory('Api', function ($http) {

	var API = 'http://192.168.1.37:8085/json/restserver/rest';

	return {

		getApi: function() {
			return $http({
				url: API,
				method: 'GET'
			})
		}

	};
})
/*
getUsers: function(){
        return $http.get("http://localhost:26309/api/User/getAll/").then(function (response) {
          return response;
        });
*/
