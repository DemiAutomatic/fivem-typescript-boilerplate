import { DatabaseSync } from "node:sqlite";
import { cache } from "@communityox/ox_lib";

const sqlite = new DatabaseSync(`${GetResourcePath(cache.resource)}/db.sqlite`);

if (
  !sqlite
    .prepare(
      `SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'example_table'`, /// change example_table to match your schema
    )
    .get()
) {
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

  private _someQuery = sqlite.prepare(
    "SELECT * FROM example_table WHERE id = ?",
  );

  someQuery(id: number) {
    return this._someQuery.get(id);
  }

  private _insert = sqlite.prepare(
    "INSERT INTO example_table (name, value) VALUES (?, ?)",
  );

  insert(name: string, value: number) {
    return this._insert.run(name, value);
  }

  private _getAll = sqlite.prepare("SELECT * FROM example_table");

  getAll() {
    return this._getAll.all();
  }

  private _update = sqlite.prepare(
    "UPDATE example_table SET value = ? WHERE id = ?",
  );

  update(id: number, value: number) {
    return this._update.run(value, id);
  }

  private _delete = sqlite.prepare("DELETE FROM example_table WHERE id = ?");

  delete(id: number) {
    return this._delete.run(id);
  }
})();

export default db;
