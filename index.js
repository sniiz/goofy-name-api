import express from "express";
import cors from "cors";
import { generateNames } from "./lib.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/gn", (req, res) => {
  let { n, c } = req.query;
  n = parseInt(n || "1");
  if (n < 1) {
    n = 1;
  }
  if (n > 100) {
    n = 100;
  }

  c = c === "1" || c === "true";

  res.json(generateNames(n, c));
});

app.listen(PORT, () => {
  console.log(
    `goofy name api listening on port ${PORT}\ntest example: http://localhost:${PORT}/gn?n=5&c=1`
  );
});
