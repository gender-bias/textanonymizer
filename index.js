var redactor = require('redact-pii')();

process.stdin.setEncoding('utf-8');

var data = "";
process.stdin.on('readable', function () {
    var chunk;
    while (chunk = process.stdin.read()) {
        data += chunk;
    }
});

process.stdin.on('end', function () {
    data = data.trim();
    redactor.redact(data).then(res => {
        console.log(res);
    });
});

