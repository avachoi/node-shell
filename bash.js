process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
	const cmd = data.toString().trim();

	//if cmd is pwd, then find working directory
	if (cmd === "pwd") {
		const pwd = require("./pwd");
		pwd();
	}
	if (cmd === "ls") {
		const ls = require("./ls");
		ls();
	}
});
