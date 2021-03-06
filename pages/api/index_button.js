export default (req, res) => {
    const sqlite3 = require('sqlite3');
    const db = new sqlite3.Database('db.sqlite3');

    let sql = `SELECT * FROM index_button`;
    try {
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            if (rows) {
                res.status(200).json(rows);
            }
        });
    } catch(err) {
        console.error(`Error: ${err.message}`);
    }
}