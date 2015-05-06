module.exports = function getStdInJson(callback)
{
	var stdin = process.stdin;
	var result = "";
	stdin.setEncoding('utf8');
	stdin.on('data', function(data) {result += data});
	stdin.on('end', function()
	{
		try {
			result = JSON.parse(result);
		} catch(e) {
			callback(e);
			return;
		}
		callback(null, result);
	});
};