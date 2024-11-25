const sqlite3 = require('sqlite3').verbose();
function writeDb(){}
function readDb(){}
function getData(callback) {
  const db = new sqlite3.Database('test.db', (err) => {
    if (err) {
      console.error('Error opening database:', err);
      callback(err);
      return;
    }
  });

  // Create table if it does not exist
  db.run(`CREATE TABLE IF NOT EXISTS test (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )`, (err) => {
    if (err) {
      console.error('Error creating table:', err);
      callback(err);
      return;
    }

    // Query data from the table
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
  });
}

module.exports = { getData };