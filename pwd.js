module.exports = function (data) {
	process.stdout.write(process.cwd(data));
	process.stdout.write('\nprompt > ');
};
