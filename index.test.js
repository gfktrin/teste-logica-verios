const mountChange = require('./index');

describe('when there are a positive amount of change', () => {
  describe('and enough coins', () => {
    it('returns the expected coins', () => {
      expect(mountChange(3.55, [20,13,2,22,1,14])).toEqual([0,1,0,0,1,3]);
    });
  });

  describe('and no coins', () => {
    it('returns zero coins', () => {
      expect(mountChange(3.55, [0,0,0,0,0,0])).toEqual([0,0,0,0,0,0]);
    });
  });

  describe('and a negative amount of coins', () => {
    it('returns zero coins', () => {
      expect(mountChange(3.55, [-9,-9,-9,-9,-9,-9])).toEqual([0,0,0,0,0,0]);
    });
  });
});

describe('when there is no change', () => {
  describe('and no coins', () => {
    it('returns zero coins', () => {
      expect(mountChange(0, [0,0,0,0,0,0])).toEqual([0,0,0,0,0,0]);
    });
  });

  describe('and there are coins', () => {
    it('returns zero coins', () => {
      expect(mountChange(0, [9,9,9,9,9,9])).toEqual([0,0,0,0,0,0]);
    });
  });

  describe('and a negative amount of coins', () => {
    it('returns zero coins', () => {
      expect(mountChange(0, [-9,-9,-9,-9,-9,-9])).toEqual([0,0,0,0,0,0]);
    });
  });
});

describe('when there is a negative change value', () => {
  describe('and no coins', () => {
    it('returns zero coins', () => {
      expect(mountChange(-1, [0,0,0,0,0,0])).toEqual([0,0,0,0,0,0]);
    });
  });

  describe('and there are coins', () => {
    it('returns zero coins', () => {
      expect(mountChange(-1, [9,9,9,9,9,9])).toEqual([0,0,0,0,0,0]);
    });
  });

  describe('and a negative amount of coins', () => {
    it('returns zero coins', () => {
      expect(mountChange(-1, [-9,-9,-9,-9,-9,-9])).toEqual([0,0,0,0,0,0]);
    });
  });
});
