const app = require("./server/app");
const PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
