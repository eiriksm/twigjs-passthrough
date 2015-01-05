module.exports = function(T) {
  T.extendFilter('passthrough', function(value) {
    return value;
  });
};
