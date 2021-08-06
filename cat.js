function cat(done, fileName) {
	const fs = require("fs");

	fs.readFile(`./${fileName}`, function (err, content) {
		if (err) {
			done(err);
		} else {
			done(content.toString());
		}
	});
}

module.exports = cat;
