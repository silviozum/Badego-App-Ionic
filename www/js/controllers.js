angular.module('starter.controllers', ['ngSanitize'])

.controller('DashCtrl', function($scope, $http,$timeout, Home) {

    Home.get().then(function (response) {
      
      $scope.PostPreview = response.data.items;
      console.log($scope.PostPreview)

    });
    
  $scope.doRefresh = function() {
  
      console.log('Refreshing!');
      $timeout( function() {
        //simulate async response
      
      Home.get().then(function (response) {
         console.log(response.data.items);
        $scope.PostPreview = response.data.items;

      });      


      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
    

})


// .filter('GetImagePost', function() {
//     return function(PostPreview, limit) {

//          return PostPreview.substr(0, limit);

//     }
// })

.controller('PostCtrl', function($scope,$http, $stateParams) {
      
      $scope.GetPostId = $stateParams.postId;      
    
      $http.get('https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts/'+ $scope.GetPostId +'?&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s')
      .success(function (response) {
         $scope.PostDetail = response;
          console.log(response.labels)
      });

        
})

.controller('SearchCtrl', function($scope,$http, $stateParams) {

  $scope.search = function(term){
    console.log(term);

      $http.get('https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts?fetchImages=true&search?q='+term+'&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s')
      .success(function (response) {
          console.log(response.items)
          $scope.SearchPostItem = response.items;
      });

  }
        
})


