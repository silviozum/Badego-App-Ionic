angular.module('starter.services', [])
// AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s GOOGLE API KEY
// 1007462794286730766 blog id
.factory('Home', function($http) {
 
   return{
    get : function() {
        return $http({
            url: ' https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts?&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s ',
            method: 'GET'
        })
    }
 }
})

.factory('List', function($http) {
 
   return{
    get : function() {
        return $http({
            url: ' https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts/bypath?&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s ',
            method: 'GET'
        })
    }
 }
});
