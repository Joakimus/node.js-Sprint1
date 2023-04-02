const Cryptify = require('cryptify');
const crypto = require("crypto");
const iv = crypto.randomBytes(16);

//Font d'inspiració: https://www.educative.io/answers/what-is-cryptocreatedecipherivalgorithm-key-iv-options

// Initializing the algorithm
const algorithm = 'aes-192-cbc';

const dades = 'Hola, sóc un fitxer de text on un Script de Node.js hi emmagatzemarà aquest informació.'
//const dades = 'But still I\'m having memories of high speeds when the cops crashed. As I laugh, pushin the gas while my Glocks blast. We was young and we was dumb but we had heart';
//const dades = '72fca60f48f19e772a79c6abed5aa9a8c926c018c515bbc85281b70e13fecac2852dfa5477af245c1a215d68418ee34c34fe2156f73c288f58fe52a483f6328abd31914e3c39e4b5fc6ce935948733b85a0b8235e8c20ac0cbbafbfd783fa0ef2b8aed818591fe22043a69353ab5013f84787eb866e2fee875f7c7747595f8cdbff4cf7ef7c25a21c5d0305e3c1c75e07d996743baa0b55e007f2980bd0eff4497c810713bd2370102de67a3d9feda8443695cdc2d1b3bca0d6497b753357efcd671303368052314482b24863b67857303d9ca3ee925d19bbaf36afd9bbc3e2f093e5d1aca0c0a5934b04c55ad8d4a9d238e600a31da092338a508244332c43577e1af97acd4f6d5fcc0ec5fa360d3f753b2bf939587dff6fc2b98e46e98b7f1c8b15cf08fe36c9fce58a5f3cf2e5a8b4c4ea16670423275530e012bb74484c61949943532069f1390a34715777814a5d17a4bd8344b56ea7c133177867f59da9d8193c3aed78bff2487262b1b201dbb1c30927f9fc285d067eec89a7cf3a88f041dc75133d1d95059c25bc4deea815ada35cf627ab4ce5b17477301ac5335c194711dae96beefdcec7d094dcb2f956105bb51af8b998f0d6ec7f125b9fc5c4351987c3bf44dc0ceb898eb4988c2985d483ab9e8b4228a720e8fe20f4514d17f65cf0880df9d5054ee380e478348f3cd16105750ae5477bbc2e8dec13a69a7cd';

const ruta='dades';
const nom_fitx='test.txt';

// Initializing the key
//const key = crypto.scryptSync(password, 'TutorialsPoint' , 24);

const filePath=`${ruta}/${nom_fitx}`;
console.log(filePath);

//const password = process.env.ENV_SECRET_KEY;
const key = '123456789024681234567890';
const password = 'bncaskdbvasbvlaslslasfhj';

// An encrypt function
// Creating Cipheriv with its parameter
// Updating text
// Using concatenation
// Returning iv and encrypted data
function encrypt(text) {
            let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
            let encrypted = cipher.update(text);            
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            let encryptedData = encrypted.toString('hex');
            console.log(encryptedData);
            return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }
    
    // A decrypt function
    function decrypt(text) {
            let iv = Buffer.from(text.iv, 'hex');
            let encryptedText = Buffer.from(text.encryptedData, 'hex');
            
            // Creating Decipher
            let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
            
            // Updating encrypted text
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            
            // returns data after decryption
            return decrypted.toString();
    }
    
    // Encrypts output
    var output = encrypt(dades);
    //console.log(output);

    // Decrypts output
    console.log(decrypt(output));
