const log = console.log
, logE = e => { log ("error: ", e) }
, logX = x => { log (x) }
, T = require('data.task')
,	exec = require('child_process').exec
, command = function (cmd) {
		return new T (function (reject, resolve) {
			exec (cmd, (error, stdout, stderr) => {
				if (error || stderr) reject (error || stderr)
				else resolve (stdout)
			})
		})
	}
;

module.exports = command
