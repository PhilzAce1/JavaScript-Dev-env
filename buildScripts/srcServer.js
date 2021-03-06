import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const PORT = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
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
