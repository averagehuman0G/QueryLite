(function(global) {
  function QueryLite(selector) {
    return new QueryLite.init(selector);
  }

  QueryLite.prototype = {};

  QueryLite.init = function(selector) {
    this.version = '0.1.0';
    //handles no selector
    if (!selector) {
      // even without a selector it is still chainable
      return this;
    } else {
      const elem = document.querySelectorAll(selector);
      console.log(elem);
      return elem;
    }
  };

  QueryLite.init.prototype = QueryLite.prototype;
  global.$ = global.QueryLite = QueryLite;
})(window);
