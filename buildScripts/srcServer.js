import express from "express";
import path from "path";
import open from "open";

const PORT = 3000;

const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  open("http://localhost:" + PORT);
  return console.log("server started");
});
