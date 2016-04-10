angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'hydrabadi food',
    lastText: 'lyari',
    face: 'img/top1.jpg'
  }, {
    id: 1,
    name: 'kolachi restaurant',
    lastText: 'layari wla',
    face: 'img/top2.jpg'
  }, {
    id: 2,
    name: 'ice food court',
    lastText: 'khao piaooo',
    face: 'img/top5.jpg'
  }, {
    id: 3,
    name: 'dil wale khana',
    lastText: 'khao khooob',
    face: 'img/top6.jpg'
  }, {
    id: 4,
    name: 'mazay ky khaney',
    lastText: 'jo baat hai khane me',
    face: 'img/top3.jpg'
  }];
 
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
