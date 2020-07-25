var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },
    insert1: function(col,vals,cb){
        orm.insert1("burgers", col, vals, function(res){
          cb(res);
        });
    },
    update1: function(objColVals, condition, cb) {
      orm.update1("burgers", objColVals, condition, function(res) {
        cb(res);
      });  
    },
    delete1: function(condition, cb){
      orm.delete1("burgers", condition, function(res){
        cb(res);
      });
    }
};

module.exports = burger;