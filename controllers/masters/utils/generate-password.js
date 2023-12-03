// const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);

const generatePassword=()=>{
	var password=''; 
	for(var i=0; i<16;i++){
		password+=String.fromCharCode(Math.floor(Math.random() * 93)+33);
  
	}
	// let shuffle = [...password];
	// shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
	// password=shuffle.join('');
	return password;
};


// const crypto = require('crypto');

// const generatePassword = () => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';
//     const charactersLength = characters.length;


//     const randomIndices = crypto.randomBytes(16).map(byte => byte % charactersLength);


//     const password = randomIndices.map(index => characters.charAt(index)).join('');
//     console.log(password);

//     return password;
// };

module.exports = generatePassword;
