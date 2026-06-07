import { Hono } from "hono";
import { db } from "./db/index.js";
import { posts } from "./db/schema.js";
import { eq } from "drizzle-orm";

export const postRoutes = new Hono();

postRoutes.get("/posts", async (c) => {
  try {
    const allPosts = await db.select().from(posts);
    return c.json(allPosts)
  } catch (err) {
    console.error("Error fetching posts");
    return c.json({ error: "Failed to fetch posts" }, 500);
  }
});

postRoutes.get("/posts/:postId", async (c) => {
  const id = parseInt(c.req.param("postId"));
  try {
    const post = db.select({
      id: posts.id,
      timestamp: posts.timestamp,
      title: posts.title,
      content: posts.content,
    }).from(posts).where(eq(posts.id, id)).get()
    return c.json(post);
  } catch (err) {
    console.error("Error fetching post");
    return c.json({ error: "Failed to fetch post" }, 500);
  }
});

postRoutes.post("/posts", async (c) => {
  const { title, content } = await c.req.json();
  const newPost = {
    timestamp: new Date(),
    title,
    content,
  };
  const newPushedPost = db.insert(posts).values(newPost).returning().get();
  return c.json(newPushedPost);
});

postRoutes.delete("/posts/:postId", async (c) => {
  const id = parseInt(c.req.param("postId"));
  const post = await db.delete(posts).where(eq(posts.id, id)).returning().get();
  return c.json(post);
});

postRoutes.patch("/posts/:postId", async (c) => {
  const id = parseInt(c.req.param("postId"));
  const { title, content } = await c.req.json();
  const post = await db.update(posts).set({
    title, content,
  })
  return c.json(post);
});
