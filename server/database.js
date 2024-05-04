const {Pool} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rent',
  password: 'postgres',
  port: 5432,
});
pool.query('SELECT NOW()',(err,result)=>{
  if(err){
    console.log("error while db connectino: ",err.message);
  }
  else{
    console.log("connected successfully");
  }
});
  module.exports = pool;