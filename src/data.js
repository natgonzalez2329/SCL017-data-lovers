const filterSelect = (dataArray, property, value) => {
  return dataArray.filter(cardFilter => cardFilter[property] === value);
};

const sortData = {
  sortByAlphabet: (dataSortByAlphabet) => dataSortByAlphabet.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  }),
  sortByAlphabetReverse: (dataSortByAlphabetReverse) => dataSortByAlphabetReverse.reverse((a,b)=> {
    return a. name > b.name ? 1 : -1 ;
  }), 
  sortByLessPopular: (dataSortByLessPopular) => dataSortByLessPopular.sort((a, b) => {
    return a.id < b.id ? 1 : -1;
  }) 
};

const computeStats = {
  percentageFilter: (dataSelect) => {
    const mathRule = ((dataSelect.length * 100) / 493).toFixed(2);
    return mathRule;
  },
  getDataProperty: (dataArray, propertyParam) => {
    let propertyDataChart = {};
    dataArray.forEach((character) =>  {
      const property = character[propertyParam];
      propertyDataChart[property] = (propertyDataChart[property] || 0) + 1;
    });
    const propertyKeys = Object.keys(propertyDataChart);
    const propertyValues = Object.values(propertyDataChart);
    return { propertyKeys, propertyValues };
  } 
}

export { filterSelect, sortData, computeStats };
