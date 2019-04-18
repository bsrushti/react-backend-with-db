const mysql = require("mysql");
const LOGIN_DETAILS = "login_details";
const BLOG_DETAILS = "blog_details";

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

const addPost = function(userDetails, res) {
  let { userName, blogTitle, content } = userDetails;
  const qry = `insert into ${BLOG_DETAILS} (user_name, title, content) values('${userName}','${blogTitle}','${content}')`;
  return connection.query(qry, err => {
    if (err) throw err;
    return res.send(200);
  });
};

const viewPost = function(userDetails, res) {
  let { userName, blogTitle } = userDetails;
  const qry = `select * from ${BLOG_DETAILS} where user_name='${userName}' and title='${blogTitle}'`;
  return connection.query(qry, function(err, result) {
    console.log("coming to view");
    if (err) throw err;
    return res.send({ status: 200, body: result });
  });
};

module.exports = { isValidUser, addPost, viewPost };
