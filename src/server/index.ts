import Config from "@common/config";
import { Greetings } from "@common/index";
import { addCommand, cache } from "@communityox/ox_lib/server";
import db from "./db";

Greetings();

if (Config.EnableNuiCommand) {
  addCommand("openNui", async (playerId) => {
    if (!playerId) return;

    emitNet(`${cache.resource}:openNui`, playerId);
  });
}

// Test commands for database
// addCommand("testdbinsert", async (playerId, args) => {
//   if (!playerId) return;
//   const name = String(args[0] || "test");
//   const value = parseInt(String(args[1] || "1"));
//   db.insert(name, value);
//   console.log(`Inserted ${name} with value ${value}`);
// });

// addCommand("testdbquery", async (playerId) => {
//   if (!playerId) return;
//   const rows = db.getAll();
//   console.log("All rows:", rows);
// });

// addCommand("testdbupdate", async (playerId, args) => {
//   if (!playerId) return;
//   const id = parseInt(String(args[0]));
//   const value = parseInt(String(args[1]));
//   if (!id || !value) return;
//   db.update(id, value);
//   console.log(`Updated id ${id} to value ${value}`);
// });

// addCommand("testdbdelete", async (playerId, args) => {
//   if (!playerId) return;
//   const id = parseInt(String(args[0]));
//   if (!id) return;
//   db.delete(id);
//   console.log(`Deleted id ${id}`);
// });
