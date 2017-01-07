angular.module('starter.controllers', ['ngSanitize'])

.controller('DashCtrl', function($scope, $http,$timeout, Home, List) {

            Home.get().then(function (response) {
         console.log(response.data.items);
        $scope.PostPreview = response.data.items;

      });

      // List.get().then(function (response) {
      //   console.log(response);

      // });

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

.controller('ChatsCtrl', function($scope) {
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
