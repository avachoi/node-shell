function pwd() {
	process.stdout.write(process.cwd()); //pwd

	process.stdout.write("\nprompt > "); //prompt
}

module.exports = pwd;
