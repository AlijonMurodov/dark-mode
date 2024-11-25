const sqlite3 = require('sqlite3').verbose();

function getData(callback) {
  const db = new sqlite3.Database('testt.db', (err) => {
    if (err) {
      console.error('Error opening database:', err);
      callback(err);
      return;
    }
  });
  db.all('SELECT * FROM test', (err, rows) => {
    if (err) {
      console.error('Error querying data:', err);
      callback(err);
    } else {
      callback(null, rows);
    }
    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err);
      }
    });
  });
}

module.exports = { getData };