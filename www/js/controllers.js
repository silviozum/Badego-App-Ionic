angular.module('starter.controllers', ['ngSanitize'])

.controller('DashCtrl', function($scope, $http, Home, List) {

      Home.get().then(function (response) {
         console.log(response.data.items);
        $scope.PostPreview = response.data.items;

      });
      
      // List.get().then(function (response) {
      //   console.log(response);

      // });
    

})

.filter('limitHtml', function() {
    return function(PostPreview, limit) {

        var changedString = String(PostPreview).replace(/<[^>]+>/gm, '');
        var length = changedString.length;

        return changedString.length > limit ? changedString.substr(0, limit - 1) : changedString; 
    }
})

.filter('GetImagePost', function($sce) {
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
