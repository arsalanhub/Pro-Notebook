const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();

// If you want to use req.body then below code will be required
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(5000, () => {
  console.log(`App listening at http://localhost:5000`);
});
