function createMap(keyValueArray) {
    return new Map(keyValueArray);
  }
  
  // Example usage:
  const keyValueArray = [
    ["Name", "John"],
    ["Age", 30],
    ["City", "Colombo"]
  ];
  
  const createdMap = createMap(keyValueArray);

  //delete age key-value pair
  createdMap.delete("Age")

  console.log(createdMap);
  