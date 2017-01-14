angular.module('starter.controllers', ['ngSanitize'])

.controller('DashCtrl', function($scope, $http,$timeout, Home) {

      Home.get().then(function (response) {
        
        $scope.PostPreview = response.data.items;

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


.filter('GetImagePost', function() {
    return function(PostPreview, limit) {

         return PostPreview.substr(0, limit);

    }
})

.controller('PostCtrl', function($scope,$http, $stateParams) {
      
      $scope.GetPostId = $stateParams.postId;      
    
      $http.get('https://www.googleapis.com/blogger/v3/blogs/1007462794286730766/posts/'+ $scope.GetPostId +'?&key=AIzaSyBlkwyQ9jO5AxIxUK5zl-Qbcvmgr-AW25s')
      .success(function (response) {
          $scope.PostDetail = response;
      });
        
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
