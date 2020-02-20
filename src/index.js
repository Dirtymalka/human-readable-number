module.exports = function toReadable(n) {
        let a = {
            1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10:
                'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18:
                'eighteen', 19: 'nineteen'
        };
        let b = {
            2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'
        };
        let c = { 1: 'one hundred', 2: 'two hundred', 3: 'three hundred', 4: 'four hundred', 5: 'five hundred', 6: 'six hundred', 7: 'seven hundred', 8: 'eight hundred', 9: 'nine hundred'
    };
        
        let strNum = n.toString();
            
            if (n == 0) return 'zero';

            if(n < 20 && n > 0) return a[n];

            if(n >= 20 && n < 100) {
                if (strNum[1] == 0) return b[strNum[0]];
                else return b[strNum[0]] + ' ' + a[strNum[1]];
    }

    if (n >= 100 && n < 1000) {
        if (strNum[1] == 0 && strNum[2] == 0) return c[strNum[0]];
        else if (strNum[1] == 0) return c[strNum[0]] + ' ' + a[strNum[2]];
        else if (strNum[2] == 0 && +(strNum[1] + strNum[2]) == 10) return c[strNum[0]] + ' ' + a[strNum[1] + strNum[2]];
        else if (strNum[2] == 0) return c[strNum[0]] + ' ' + b[strNum[1]];
        else if (+(strNum[1] + strNum[2]) < 20) return c[strNum[0]] + ' ' + a[strNum[1] + strNum[2]];
        else return c[strNum[0]] + ' ' + b[strNum[1]] + ' ' + a[strNum[2]];
    }
}
