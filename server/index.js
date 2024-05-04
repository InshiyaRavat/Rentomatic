const express = require('express')
const cors= require("cors")
const session =require("express-session")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const pgSession = require('connect-pg-simple')(session);
const pgp = require('pg-promise')();

const app = express()
const port = 3001
const pool = require('./database')

app.use(express.json())
app.use(cors({
  origin : ["http://localhost:3000"],
  methods : ["POST","GET"],
  credentials : true
}));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const pgSessionStore = new pgSession({
//   pgPromise: pgp,
//   conString: 'your-postgres-connection-string',
//   tableName: 'session',
// });

app.use(session({
  // store: pgSessionStore,
  secret : 'secret',
  resave : false,
  saveUninitialized : false,
  cookie : {
    secure : false,
    maxAge : 1000 * 60 * 60 * 24
  }
}))

app.get('/',(req,res)=>{
  if(req.session.username){
    return res.json({valid:true, username: req.session.username})
  }
  else{
    return res.json({valid:false})
  }
})
app.post('/loginUser', async (req, res) => {
  const sql = `SELECT * FROM account where username=$1 and password=$2`;
  const values =[req.body.username, req.body.password]

  try {
    const result = await pool.query(sql, values);
    console.log('Fetched:', result);
    if (result.rowCount > 0) {
      req.session.username = req.body.username;
      console.log(req.session.username);
      return res.json({ Status: 'Success' });
    } else {
      return res.json({ Status: 'Failure', Message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error while fetching data:', err.message);
    return res.json({ Error: 'Error occurred while fetching data' });
  }
});

app.post('/registerUser', async (req, res) => {
  const sql = `INSERT INTO account (username,email,password) VALUES ($1,$2,$3)`;
  const values =[req.body.username, req.body.email, req.body.password]
  console.log(req.body.username);
  console.log(req.body.email);
  console.log(req.body.password);

  try {
    const result = await pool.query(sql, values);
    console.log('Inserted:', result);
    return res.json({ Status: 'Success' });
  } catch (err) {
    console.error('Error inserting data:', err.message);
    return res.json({ Error: 'Error occurred while inserting data' });
  }
});

app.post('/saveDetails', async (req,res)=>{
    console.log(req.session.username);
    const uname= [req.session.username];
    console.log("usernmae from session: ",uname);
    const sql= `SELECT * FROM account where username=$1`;
    
    try{
      const result = await pool.query(sql, uname);
      console.log('Fetched:', result);
      const uID= result.rows[0].userid;
      console.log("user id fetched is: ",uID)

      console.log( req.body.firstName);
      console.log( req.body.lastName);
      console.log( req.body.email);
      console.log( req.body.address);
      console.log( req.body.contact);
      console.log( req.body.DOB);
      console.log( req.body.eContact);
      console.log( req.body.zipCode);
      const sql1= `INSERT INTO userDetails (userID,firstName,lastName,email,address,contact,DOB,eContact,zipCode) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`;
      const values = [uID,req.body.firstName, req.body.lastName, req.body.email, req.body.address, req.body.contact, req.body.DOB, req.body.eContact, req.body.zipCode];
      

    const result1 = await pool.query(sql1, values);
    console.log('Inserted:', result1);
    return res.json({ Status: 'Success' });

    }catch (err) {
      console.error('Error while saving data:', err.message);
      return res.json({ Error: 'Error occurred while saving data' });
    }
})
app.post('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.error('Error during logout:', err);
        return res.json({ Status: 'Error', Message: 'Unable to log out' });
      } else {
        console.log('Logout successful')
        return res.json({ Status: 'Success' });
      }
    });
  } else {
    res.json({ Status: 'Error', Message: 'No active session to log out' });
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})