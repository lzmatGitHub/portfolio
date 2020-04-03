const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite3');

export default (req, res) => {
    let sql = `SELECT * FROM index_button`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        if (rows) {
            res.status(200).json(rows);
        }
    });
}