const app = require("./server/app");
const PORT = 8000;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
