import * as fs from "fs";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
const suffixes = JSON.parse(fs.readFileSync("./suffixes.json", "utf8"));

app.post("/names", (req, res) => {
  const { quantity, plural } = req.body;

  const names = [];

  for (let i = 0; i < quantity; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    let name = prefix + suffix;
    if (plural) {
      if (name[name.length - 1] === "y") {
        name = name.substring(0, name.length - 1) + "ies";
      } else if (name[name.length - 1] === "s") {
        name = name + "es";
      } else {
        name = name + "s";
      }
    }

    names.push(name);
  }

  res.send(names);
});

app.get("/", (req, res) => {
  const names = [];
  for (let i = 0; i < 10; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    names.push(prefix + suffix);
  }
  res.send(names);
});

app.get("/full", (req, res) => {
  const names = [];
  for (let i = 0; i < 10; i++) {
    let name = "";
    for (let i = 0; i < 2; i++) {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

      name += prefix + suffix + " ";
    }
    names.push(name.trim());
  }
  res.send(names);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
