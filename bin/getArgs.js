var _ = require('lodash');
var getStdInJson = require('./getStdInJson');

module.exports = function(args, callback)
{
	var argv = require('minimist')(args);
	if(argv.pipe)
	{
		getStdInJson(function(error, data)
		{
			if(error) 
			{
				return callback(error);
			}
			callback(null, _.defaults(data, argv));
		});
	}
	else
	{
		setImmediate(callback.bind(null, null, argv));
	}
};