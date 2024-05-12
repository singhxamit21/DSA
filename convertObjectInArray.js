const data = {
    "2021-2022": {
      name: "Amit",
      address: "wadala"
    },
    "2022-2023": {
      name: "Gautam",
      address: "mumbai"
    },
    "2023-2024": {
      name: "next",
      address: "dader"
    }
  };
  
  const dataArray = [];
  
  for (const yearRange in data) {
    const entry = data[yearRange];
    entry.year = yearRange;
    dataArray.push(entry);
  }
  
  console.log(dataArray);

  ///Output
//   [
//     { name: 'Amit', address: 'wadala', year: '2021-2022' },
//     { name: 'Gautam', address: 'mumbai', year: '2022-2023' },
//     { name: 'next', address: 'dader', year: '2023-2024' }
//   ]