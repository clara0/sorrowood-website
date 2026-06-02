import { Hono } from "hono";

const posts = [
  {
    id: 0,
    timestamp: Date.parse("2025-12-23T10:36:00Z"),
    title: "uwu",
    content: "hello",
    tags: [],
  },
];

let nextId = 1;

export const postRoutes = new Hono();

postRoutes.get("/posts", async (c) => {
  return c.json(posts);
});

postRoutes.get("/posts/:postId", async (c) => {
  const id = parseInt(c.req.param("postId"));
  return c.json(posts[id]);
});

postRoutes.post("/posts", async (c) => {
  const { title, content, tags } = await c.req.json();
  const newPost = {
    id: nextId++,
    timestamp: new Date().getTime(),
    title,
    content,
    tags
  };
  posts.push(newPost);
  return c.json(newPost);
});

postRoutes.delete("/posts/:postId", async (c) => {
  const id = parseInt(c.req.param("postId"));
  const post = posts[id];
  posts.splice(id, 1);
  return c.json(post);
});

postRoutes.patch("/posts/:postId", async (c) => {
  const id = parseInt(c.req.param("postId"));
  const { title, content } = await c.req.json();
  posts[id] = { ...posts[id], title, content };
  return c.json(posts[id]);
});
