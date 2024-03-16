/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var rom = "";

    
        while (num >= 1000) {
            rom += "M"
            num -= 1000;
            // console.log(num);
        }
        while (num >= 500) {
            if (num >= 900) {
                rom += "CM";
                num -= 900;
            }else{
                rom += "D";
                num -= 500;
            } 
            // console.log(num);
        }
        while (num >= 100) {
            if (num >= 400) {
                rom += "CD";
                num -= 400;
            }else{ 
                rom += "C";
                num -= 100;
            }
            // console.log(num);
        }
        while (num >= 50) {
            if (num >= 90) {
                rom += "XC";
                num -= 90;
            }else{ rom += "L";
            
            num -= 50;}
            // console.log(num);
        }
        while (num >= 10) {
            if (num >= 40) {
                rom += "XL";
                num -= 40;
            }else{ rom += "X";
           
            num -= 10;}
            // console.log(num);
        }
        while (num >= 5) {
            if (num === 9) {
                rom += "IX";
                num -= 9;
            }else{ rom += "V";
            
            num -= 5;}
            // console.log(num);
        }
        while (num >= 1) {    //MCMXCIV
            if (num === 4) {
                rom += "IV";
                num -= 4;
            }else {rom += "I";
            
            num -= 1;}
            // console.log(num);
        }
    return rom;
};