const pwd = require('./pwd');
const ls = require('./ls');

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
});
