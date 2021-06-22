import { filterSelect, sortData, computeStats } from '../src/data.js';


describe('filterSelect', () => {
  it('should be a function', () => {
    expect(typeof filterSelect).toBe('function');
  });

  
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('sortData', () => {
  it('should be an object', () => {
    expect(typeof sortData).toBe('object');
  });

  describe('sortData.sortByAlphabet', () => {
    it('should be a function', () => {
      expect(typeof sortData.sortByAlphabet).toBe('function');
    });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
