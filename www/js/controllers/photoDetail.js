'use strict';

app.controller('PhotoDetailCtrl', function($scope, Chats, Products) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
    $scope.image = 'http://www.smashbros.com/us/images/character/cloud/illust-modal.jpg';

    $scope.button = function(product){
      console.log('button was clicked', product, $scope.image);
      Products.saveProduct(product, $scope.image);
  }
})
