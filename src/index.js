const numbers = {
    basic: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
    parts: ['zero', 'one', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'],
}

module.exports = function toReadable (number) {
    let result = '';
    const digitsArray = String(number).split('');

    
    const hundred = digitsArray[digitsArray.length - 3];
    const decade = digitsArray[digitsArray.length - 2];
    const unit = digitsArray[digitsArray.length - 1]; 

    if (digitsArray.length === 3) {
        result += `${numbers.basic[hundred]} hundred`;
        if (number % 100 !== 0) {
            result += ' ';
        }
    }

    if (digitsArray.length !== 1 && (number % 100 !== 0 || digitsArray.length === 2)) {
            if (decade !== '0' && decade !== '1') {
                result += `${numbers.parts[decade]}ty`;
                if (number % 10 !== 0) {
                    result += ' ';
                }
            }       
    };

    if (number % 10 !== 0 && decade !== '1') {  
        result += `${numbers.basic[unit]}`;
    }

    if (decade == '1') {  
        switch (unit) {
            case '0':
                result += `${numbers.basic[10]}`;
            break; 
            case '1':
                result += `${numbers.basic[11]}`;
            break; 
            case '2':
                result += `${numbers.basic[12]}`;
            break;
            case '4':
                result += `${numbers.basic[4]}teen`;
            break;
            default:
                result += `${numbers.parts[unit]}teen`;
        }
    }

    if (number === 0) {
        result += numbers.basic[0];
    }

        return result;
}
