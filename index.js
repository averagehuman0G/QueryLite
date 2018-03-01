(function(global) {
  function QueryLite() {
    return new QueryLite.init();
  }

  QueryLite.prototype = {};

  QueryLite.init = function() {
    this.version = '0.1.0';
  };

  QueryLite.init.prototype = QueryLite.prototype;
  global.$ = global.QueryLite = QueryLite;
})(window);
