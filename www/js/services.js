angular.module('starter.services', [])

.factory('Home', function($http) {
 
   return{
    get : function() {
        return $http({
            url: ' https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts?fetchImages=true&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s ',
            method: 'GET'
        })
    }
 }
})



