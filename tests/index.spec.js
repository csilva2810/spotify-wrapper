var expect = require('chai').expect;

describe('Index', function () {
  var arr;

  beforeEach(function () {
    arr = [1, 2, 3];
  });

  // teste de tipo ou se existe (smoke test)
  it('should be an array', function () {
    expect(arr).to.be.an('array');
  });

  it('should have length equals 4 when push an item to the array', function () {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove value 3 when pop on the array', function () {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should have a size of 2 when pop a value from the array', function () {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
