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
  console.log(createdMap);  // Output: Map { 'Name' => 'John', 'Age' => 30, 'City' => 'Colombo' }
  