const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected to database successfully");
});

const addUser = function(userDetails) {
  const { name, password } = userDetails;
  const qry = `insert into login_details values (' ${name} ',' ${password} ')`;

  connection.query(qry, function(err, result) {
    if (err) throw err;
  });
  console.log("insert query executed successfully");
};

module.exports = addUser;
