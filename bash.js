const pwd = require('./pwd');
const ls = require('./ls');
const cat = require ('./cat');

// Output a prompt
process.stdout.write('prompt > ');
//stdin
process.stdin.on('data', (data) => {
	let cmd = data.toString().trim();


	if (cmd === 'pwd') {
		pwd(cmd);
	}
	if (cmd === 'ls') {
		ls(cmd);
	}
	if (cmd.split(' ')[0] === 'cat') {
		let inputs = cmd.split(' ');
		// console.log(inputs);
		// if (inputs[0] === 'cat'){
			console.log(cmd);
			cat(inputs[1]);
		}
	}
);
