process.stdout.write("prompt > ");

const done = (output) => {
	process.stdout.write(output);
	process.stdout.write("\nprompt > ");
};

process.stdin.on("data", (data) => {
	const cmd = data.toString().trim();
	let cmdList = cmd.split(" ");
	//if cmd is pwd, then find working directory
	if (cmdList[0] === "pwd") {
		const pwd = require("./pwd");
		pwd(done);
	}
	if (cmdList[0] === "ls") {
		const ls = require("./ls");
		ls(done);
	}

	//if the first 3 letter are "cat"
	//split the string by " "
	//give the cat function the file name
	if (cmdList[0] == "cat") {
		const cat = require("./cat");
		cat(done, cmdList[1]);
	}

	if (cmdList[0] == "curl") {
		const curl = require("./curl");
		curl(done, cmdList[1]);
	}
});
