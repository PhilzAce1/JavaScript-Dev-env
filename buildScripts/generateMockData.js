// this is going to generate mock data
import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import { red, green } from "chalk";

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) return console.log(red(err));
  console.log(green("Mock Success"));
});
