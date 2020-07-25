var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },
    insert1: function(name, cb) {
      orm.insert1("burgers", [
          "burger_name", "devoured"
      ], [
          name, false
      ], cb);
    },
    update1: function(id, cb) {
      var condition = "id=" + id;
      orm.update1("burgers", {
          devoured: true
      }, condition, cb);
  },
 
};

module.exports = burger;