// require library
const prompt = require('prompt-sync')({sigint: true});


const {encrypt, decrypt} = require('./self'); // self made

let choose; // init var

do {
    // choose algorithm
    console.log('Simple Encrypt [1]\nExit [0]');
    choose = prompt('Choose : ');

    // logic check algorithm
    if(isNaN(choose)) {
        console.error('Please input a number!\n');
    } else {
        switch (Number(choose)) {
            case 0:
                choose = 0;
                break;
            case 1:
                console.log('\n=====Simple Algorithm=====\nencrypt [1]\ndecrypt[2]');
                const input = prompt('Choose : ');
                self(input);
                break;
            default:
                console.log('out of list!\n');
                break;
        }
    }

} while (choose != 0);

// self made algoritm
function self(input) {
    const n = Number(input);

    if(isNaN(n)) {
        console.error('Please input a number!\n');
    } else if (n == 1) {
        // get user input
        console.log('');
        const plainText = prompt('plain teks : ');

        // logic encrypt
        const encryptText = encrypt(plainText.toLowerCase());

        // print results
        console.log(`\n===== Results =====\nPlain Text : ${plainText}`);
        console.log(`encrypted : ${encryptText}\n`);
    } else if (n == 2) {
        // get user input
        console.log('');
        const encryptedText = prompt('enkripsi teks : ');

        // logic decrypt
        const decryptText = decrypt(encryptedText);

        // print results
        console.log(`\n===== Results =====\nencrypted : ${encryptedText}`);
        console.log(`decrypt : ${decryptText}\n`);
    }
    
}