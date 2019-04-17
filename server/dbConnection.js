const mysql = require("mysql");
const LOGIN_DETAILS = "login_details";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected to database successfully");
});

const isValidUser = function(userDetails, res) {
  let { name, password } = userDetails;
  const qry = `select * from ${LOGIN_DETAILS} where name='${name}' and password='${password}'`;
  return connection.query(qry, function(err, result) {
    if (err) throw err;
    if (result.length) return res.send({ status: true });
    return res.send({ status: false });
  });
};

module.exports = { isValidUser };
