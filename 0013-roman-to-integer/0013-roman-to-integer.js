/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var int = 0;
    var arr = []; 

    for (let i = 0; i <= s.length; i++) {
      if (i === s.length) {
        arr.push(0);
      }
      switch (s[i]) {
        case "I":
                  arr.push(1);
                  break;
                case "V":
                  arr.push(5);
                  break;
                case "X":
                  arr.push(10);
                  break;
                case "L":
                  arr.push(50);
                  break; 
                case "C":
                  arr.push(100);
                  break;
                case "D":
                  arr.push(500);
                  break; 
                case "M":
                  arr.push(1000);
                  break;
      
        default:
          break;
      }
      // console.log(arr);
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= arr[i+1]) {
        int = int + arr[i];
      }else int -= arr[i];
      // console.log(int);
    }
    
    return int;
};