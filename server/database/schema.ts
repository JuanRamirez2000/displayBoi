import { sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const pixelArt = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
});
