const Pool= require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Waim",
    port: 5432,
    password: "Albertos01",
    
});

module.exports = pool;