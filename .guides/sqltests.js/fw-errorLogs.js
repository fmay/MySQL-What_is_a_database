var errorLogs = {};
var errorMessages = [
	'Did you miss any semicolons between each query?',
	'Does the table name match existing tables?',
	'Check your column names'
];

errorLogs.queryDatabaseByType = function(globalCount){
	console.log('[Error   ]: Task ' + globalCount + '. Your SQL query has syntax errors');
	console.log(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
	process.exit(1);
}
errorLogs.readChallengeFile = function(reason, srcFile, tasks, queries){
	switch (true) {
		case (reason == 'empty'):
			console.log('Fail to retrieve queries from ' + srcFile + ' file. File is empty.');
			console.log('Did you forget to save it?');
			break;
		case (reason == 'srcFile'):
			console.log('Fail to retrieve queries from ' + srcFile + ' file.');
	  	console.log('Does the name match the file in your file tree?');
	  	process.exit(1);
	  	break;
	  case (reason == 'length'):
	  	console.log('You are missing some tasks.')
	  	console.log('Requested statements: ' + tasks.length);
	  	console.log('Written statements: ' + queries.length);
	  	console.log('Each statement must end with a semicolon.')
	  	process.exit(1);
	  	break;
	}
}
errorLogs.queryMismatch = function(globalCount, task){
	console.log('[Error   ]: Task ' + globalCount + '. Expected: ' + task);
	process.exit(1);
}
errorLogs.unknownQuery = function(globalCount){
	console.log('[Error   ]: Task ' + globalCount + '. Query matches no SQL keyword');
	process.exit(1);
}

module.exports = errorLogs;