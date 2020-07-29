const http = require('http');

http.get('http://localhost:3000/api/employees/Essam', (res) => {
console.log("statusCode: ", res.statusCode);

    res.on('data', (d) => {
        result = d;
    });

    res.on('end', () => {
        console.log(result.toString());
    });

})