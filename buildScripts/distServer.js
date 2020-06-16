import express from "express";
import path from "path";
import open from "open";
import compression from "compression";
const PORT = 3000;
const app = express();
app.use(compression());
app.use(express.static("dist"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      firstName: "Akuagwu",
      lastName: "Philemon",
      email: "ace@gmail.com",
    },
    { id: 2, firstName: "Emeka", lastName: "Joy", email: "joy@gmail.com" },
    { id: 3, firstName: "Mordi", lastName: "Joy", email: "some@gmail.com" },
    { id: 4, firstName: "Danni", lastName: "Dave", email: "dave@gmail.com" },
  ]);
});
app.listen(PORT, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  open("http://localhost:" + PORT);
  // eslint-disable-next-line no-console
  return console.log("server started");
});
