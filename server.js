var r = require('rethinkdb');

r.connect({host: 'localhost', port: 28015}, function(err, conn) { // 2
if(err) throw err; // 3
r.db('test').tableCreate('fake_data').run(conn, function(err, res) { // 4
if(err) throw err; // 5
console.log(res); // 6
});
});