
import { filterSelect, sortData } from '../src/data.js';
const arrayTest = [{id: 1, name: "Summer Sanchez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 3, name: "Fabiana Fernandez", status: "Dead"}];

describe('filterSelect', () => {
  it('is a function', () => {
    expect(typeof filterSelect).toBe('function');
  });

  it('returns arrayTest', () => {
    expect(filterSelect(arrayTest,"status","Dead")).toEqual([{id: 1, name: "Summer Sanchez", status: "Dead"}, {id: 3, name: "Fabiana Fernandez", status: "Dead"}]);
  });
});

describe('sortData', () => {
  it('is an object', () => {
    expect(typeof sortData).toBe('object');
  });
  /*describe('sortData.dataSortByAlphabet', () => {
    it('is a function', () => {
      expect(typeof sortData.dataSortByAlphabet).toBe('function');
    });*/
    it('returns arrayTest', () => {
      expect(sortData.sortByAlphabet(arrayTest)).toEqual([{id: 3, name: "Fabiana Fernandez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 1, name: "Summer Sanchez", status: "Dead"}]);    
  });
//});
it('returns arrayTest', () => {
  expect(sortData.sortByAlphabetReverse(arrayTest)).toEqual([{id: 1, name: "Summer Sanchez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 3, name: "Fabiana Fernandez", status: "Dead"}]);    
});
it('returns arrayTest', () => {
  expect(sortData.sortByLessPopular(arrayTest)).toEqual([{id: 3, name: "Fabiana Fernandez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 1, name: "Summer Sanchez", status: "Dead"}]);    
});
});

