import { sqliteTable, text, integer, primaryKey } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  timestamp: integer("timestamp", { mode: "timestamp" }).notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
});

export const tags = sqliteTable("tags", {
    tag: text("tag").primaryKey(),
});

export const postsToTags = sqliteTable("post_tag", {
    postId: integer("post_id").references(() => posts.id, {
        onDelete: "cascade",
    }),
    tag: text("tag").references(() => tags.tag, {
        onDelete: "cascade",
    }),
}, (table) => [
    primaryKey({ columns: [table.postId, table.tag]}),
]);