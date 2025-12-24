import { Hono } from "hono";

// temp lol
const posts = [
  {
    id: 0,
    title: "uwu",
    text: "hello",
    date: Date.parse("2025-12-23T10:36:00Z"),
  },
];

let nextId = 1;

const postRoutes = new Hono();

postRoutes.get("/posts", async (c) => {
  return c.json(posts);
});

postRoutes.get("/posts/:postId", async (c) => {
  const id = parseInt(c.req.param("postId"));
  return c.json(posts[id]);
});

postRoutes.post("/posts", async (c) => {
  const { title, text } = await c.req.json();
  const newPost = {
    id: nextId++,
    title,
    text,
    date: new Date().getTime(),
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
  const { title, text } = await c.req.json();
  posts[id] = { ...posts[id], title, text };
  return c.json(posts[id]);
});
