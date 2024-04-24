// don't mind this
import { generateNames } from "./lib";

const extension = {
  deployments: ["VITTRA"], // yes i name my servers cringe things, cry about it
  routes: {
    main: {
      path: "/gn",
      method: "GET",
      handler: async (req, res) => {
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
      },
    },
  },
};

export default extension;
