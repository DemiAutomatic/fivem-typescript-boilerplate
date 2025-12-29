import { DatabaseSync } from "node:sqlite";
import { cache } from "@communityox/ox_lib";

const sqlite = new DatabaseSync(`${GetResourcePath(cache.resource)}/db.sqlite`);

if (!sqlite.prepare(`SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'items'`).get()) {
  const statement = LoadResourceFile(cache.resource, "sql/schema.sql");

  sqlite.exec(statement);
}

sqlite.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;
  PRAGMA journal_size_limit = 67108864;
  PRAGMA mmap_size = 134217728;
  PRAGMA cache_size = 2000;
`);

const db = new (class Database {
  // example

  private _someQuery = sqlite.prepare("SELECT * FROM example_table WHERE id = ?");

  someQuery(id: number) {
    return this._someQuery.get(id);
  }
})();

export default db;
