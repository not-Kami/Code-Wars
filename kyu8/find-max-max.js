var min = function(list) {
    if (list.length === 1) {
      return list[0];
    }
  
    let min = list[0]; 
    for (let i = 1; i < list.length; ++i) { 
      if (list[i] < min) {
        min = list[i];
      }
    }
    return min;
  };
  var max = function(list) {
    if (list.length === 1) {
      return list[0];
    }
  
    let max = list[0];
    for (let i = 1; i < list.length; ++i) {
      if (list[i] > max) {
        max = list[i]; 
      }
    }
    return max;
  };