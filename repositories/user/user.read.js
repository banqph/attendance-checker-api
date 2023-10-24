module.exports = {
    async getById(id) {
        return {
            id: id,
            name: 'John Doe',
            studentNumber: '202300001',
            contactNumber: '09271234567'
        }
    }
}

// const db = require('../../database-connection/db'); 

// db.query('SELECT * FROM your_table_name', (err, results, fields) => {
//   if (err) {
//     console.error('Error executing the query:', err);
//     return;
//   }
//   console.log('Query results:', results);
// });

// db.end((err) => {
//   if (err) {
//     console.error('Error closing the connection:', err);
//     return;
//   }
//   console.log('Connection closed');
// });
