function curl(done, site) {
	const request = require("request");

	request(site, function (err, response, body) {
		if (err) {
			done(err);
		} else {
			done(body);
		}
	});
}

module.exports = curl;
