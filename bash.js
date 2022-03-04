const pwd = require('./pwd');
const ls = require('./ls');
const cat = require ('./cat');
const curl = require('./curl')

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
		cat(inputs[1]);
	}
	if (cmd.split(' ')[0] === 'curl') {
		let inputs = cmd.split(' ')
		curl(inputs[1])
	}
});
