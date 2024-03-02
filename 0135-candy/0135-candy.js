/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var candies = [];
    for (let index = 0; index < ratings.length; index++) {
        candies.push(1);
    }
    
    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
              }
            
        }
         
        
    };
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
          candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
      }
    return candies.reduce((a,b) => a+b, 0);
};