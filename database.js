const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite3');

let sql = `SELECT * FROM cards`;
db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    if(rows){
        console.log(rows)
    }
});