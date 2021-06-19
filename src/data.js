const filterSelect = (dataArray, property, value) => {
  return dataArray.filter(cardFilter => cardFilter[property] === value)
};

const sortData = {
   sortByAlphabet: (dataSortByAlphabet) => dataSortByAlphabet.sort((a, b) => {
  return a.name > b.name ? 1 : -1;
}),
sortByAlphabetReverse : (dataSortByAlphabetReverse) => dataSortByAlphabetReverse.reverse((a,b)=> {
  return a. name > b.name ? 1 : -1 ;
}), 
sortByLessPopular: (dataSortByLessPopular) => dataSortByLessPopular.sort((a, b) => {
  return a.id < b.id ? 1 : -1;
})
};
 export { filterSelect, sortData };