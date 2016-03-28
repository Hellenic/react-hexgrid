import HexUtils from '../../src/HexUtils';
import Hex from '../../src/Hex';
import assert from 'assert';
import chai from 'chai';

chai.should();

describe('HexUtils', function() {
  describe('#equals(a,b)', function () {
    let hex1 = new Hex(0, 0, 0);
    let hex2 = new Hex(1, 1, 1);
    let hex3 = new Hex(0, 0, 0);

    it('should be able to compare Hex', function () {
      HexUtils.equals(hex1, hex1).should.be.true;
      HexUtils.equals(hex1, hex3).should.be.true;
      HexUtils.equals(hex1, hex2).should.be.false;
      HexUtils.equals(hex2, hex3).should.be.false;
    });
  });
});
