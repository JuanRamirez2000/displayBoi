import { drizzle } from "drizzle-orm/d1";
import * as schema from "../database/schema";

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}

export const tables = schema;
export { sql, eq, and, or } from "drizzle-orm";
export type User = typeof schema.pixelArt.$inferSelect;
