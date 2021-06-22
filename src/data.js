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
    //console.log(propertyDataChart)
    dataArray.forEach((character) =>  {
      const property = character[propertyParam];
     //console.log(Object.entries(propertyDataChart[property]));
      propertyDataChart[property] = (propertyDataChart[property] || 0) + 1;
      //console.log(propertyDataChart);
    });
    //console.log(propertyDataChart);
    const propertyKeys = Object.keys(propertyDataChart); // array de las llaves
    const propertyValues = Object.values(propertyDataChart); // array de los valores
    // console.log(statusKeys);
    // console.log(statusValues);
    return { propertyKeys, propertyValues };
  } 
 
}

export { filterSelect, sortData, computeStats };
