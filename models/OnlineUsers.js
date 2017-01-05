var onlineUsers = [];

module.exports = {
  add: function (value) {
    onlineUsers.push(value);
  },
  remove: function (value) {
    var index = onlineUsers.indexOf(value);
    if (index > -1) {
      onlineUsers.splice(index, 1);
    }
  },
  list: function () {
    console.log(onlineUsers);
  },
  search: function (value) {
    for (var i = 0; i < onlineUsers.length; i++) {
      if (onlineUsers[i] == value) return true;
    }
    return false;
  }
};
