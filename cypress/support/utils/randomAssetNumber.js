import RandExp from 'randexp';

  module.exports = function () {
    return new RandExp(/ISIN[0-9]{10}/).gen()
  }