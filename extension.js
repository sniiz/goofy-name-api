// don't mind this file, it's for my own convenience's sake
import { generateNames } from "./lib";

const extension = {
  deployments: ["VITTRA"], // yes i name my servers cringe things, cry about it
  routes: {
    main: {
      path: "/gn",
      method: "GET",
      handler: async (req, res) => {
        let { n, c } = req.query;
        n = Math.min(100, Math.max(1, parseInt(n || "1")));

        c = c === "1" || c === "true";

        res.json(generateNames(n, c));
      },
    },
  },
};

export default extension;
