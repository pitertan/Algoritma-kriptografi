// req library and json data config
const fs = require('fs');
const rawdata = fs.readFileSync('./config.json');
const {config} = JSON.parse(rawdata);

// data env
const distance = 8; // can't be more than config.length

// encrypt
module.exports.encrypt = (text) => {

    var encrypted = '';

    for (let i = 0; i < text.length; i++) {
        // encrypt every single value data
        var indexEncrypt;
    
        // check special charaters
        if(text[i] === ' ') {
            indexEncrypt = config.indexOf('_');
        } else {
            indexEncrypt = config.indexOf(text[i]);
        }
    
        // check logic if index over value
        if (indexEncrypt + distance >= config.length) {
            const newIndex = (indexEncrypt + distance) - config.length;
            encrypted += config[newIndex];
        } else {
            encrypted += config[indexEncrypt + distance];
        }
    }

    return encrypted;
}

// decrypt
module.exports.decrypt = (encryptedText) => {
    var decrypt = '';

    for (let i = 0; i < encryptedText.length; i++) {
        // encrypt every single value data
        var indexOfDecrypt;
    
        // check special charaters in encryptedText
        if(encryptedText[i] === ' ') {
            indexOfDecrypt = config.indexOf('_');
        } else {
            indexOfDecrypt = config.indexOf(encryptedText[i]);
        }
    
        // check logic if index over value
        if (indexOfDecrypt - distance > config.length) {
            decrypt += config[indexOfDecrypt - distance];
        } else {
            // raw index array - distance
            const rawOfIndex = indexOfDecrypt - distance;
            // new array index
            const newOfIndex = config.length - Math.abs(indexOfDecrypt - distance);

            // check reverse value index + distance
            if(newOfIndex + distance >= config.length) {
                
                // check some logic
                if(rawOfIndex < 0) {
                    // check if have space
                    if(config[newOfIndex] === '_') {
                        decrypt += ' ';
                    } else {
                        decrypt += config[newOfIndex];
                    }
                } else if(rawOfIndex <= distance) {
                    decrypt += config[rawOfIndex];
                } else {
                    decrypt += config[newOfIndex];
                }

            } else {
                decrypt += config[rawOfIndex];
            }
        }
    }

    return decrypt;
}
