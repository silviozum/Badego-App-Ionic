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
        $scope.PostPreview = response.data.items;

      });      


      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };

})


.filter('GetImagePost', function() {
    return function(PostPreview, limit) {

         return PostPreview.substr(0, limit);

    }
})



.controller('PostCtrl', function($scope,$http,$stateParams) {
      
      $scope.GetPostId = $stateParams.postId;      
    
      $http.get('https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts/'+ $scope.GetPostId +'?&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s')
      .success(function (response) {
         $scope.PostDetail = response;
         console.log($scope.PostDetail)
          $scope.tagRelated = response.labels[0];

          $scope.metaImages = $scope.PostDetail.images[1].url;

   
          
          $http.get('https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts?fetchImages=true&labels='+$scope.tagRelated+'&maxResults=2&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s')
          .success(function (response) {
             $scope.relatedItems = response.items;
             console.log($scope.PostDetail.id)
             console.log($scope.relatedItems)

            });             
              
            

          
      });

        
})
  

.controller('SearchCtrl', function($scope,$http, $stateParams) {

  $scope.search = function(term){
    if(term.length >= 2){
      $http.get('https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts/search?q='+term+'&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s')
      .success(function (response) {
          $scope.SearchPostItem = response.items;
      });
    }
  }
        
})

.controller('tagSearchCtrl', function($scope,$http, $stateParams, $timeout) {

  console.log($stateParams.tag);

  $scope.labelTag = $stateParams.tag;

  $http.get('https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts?fetchImages=true&labels='+$scope.labelTag+'&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s')
  .success(function (response) {
     $scope.PostPreview = response.items;
     console.log($scope.PostPreview);
  });

  $scope.doRefresh = function() {
  
      console.log('Refreshing!');
      $timeout( function() {
        //simulate async response
      
    $http.get('https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts?fetchImages=true&labels='+$scope.labelTag+'&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s')
    .success(function (response) {
       $scope.PostPreview = response.items;
       console.log($scope.PostPreview);
    });
 


      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
    

        
})


