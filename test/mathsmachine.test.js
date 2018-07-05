const chai = require('chai');
const expect = chai.expect;

describe('#push()', function () {
  it('should add an item to the array', function () {
    array = [1, 2, 3, 4]
    array.push(6)
    expect(array).to.eql([1, 2, 3, 4, 6]);
  });
});
