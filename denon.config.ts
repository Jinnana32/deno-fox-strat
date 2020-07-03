import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run app.ts",
      desc: "run my app.ts file",
      allow: [
        "net",
        "read",
        "write",
        "plugin"
      ],
      unstable: true
    },
  },
};

export default config;
