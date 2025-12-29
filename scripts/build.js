//@ts-check

import { exec, getFiles } from "./utils.js";
import { createBuilder, createFxmanifest } from "@communityox/fx-utils";

const watch = process.argv.includes("--watch");
const dropLabels = ["$BROWSER"];

if (!watch) dropLabels.push("$DEV");

createBuilder(
  watch,
  {
    keepNames: true,
    legalComments: "inline",
    bundle: true,
    treeShaking: true,
  },
  [
    {
      name: "server",
      options: {
        platform: "node",
        target: ["node22"],
        format: "cjs",
        dropLabels: [...dropLabels, "$CLIENT"],
      },
    },
    {
      name: "client",
      options: {
        platform: "browser",
        target: ["es2023"],
        format: "iife",
        dropLabels: [...dropLabels, "$SERVER"],
      },
    },
  ],

  async (outfiles) => {
    const files = await getFiles("static", "locales");
    await createFxmanifest({
      client_scripts: [outfiles.client],
      server_scripts: [outfiles.server],
      files: ["lib/init.lua", "lib/client/**.lua", "locales/*.json", ...files],
      dependencies: ["/server:13068", "/onesync", "ox_lib"],
      metadata: {
        lua54: "yes",
        node_version: "22",
      },
    });
  },
);
