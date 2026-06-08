import { Hono } from "hono";
import { postRoutes } from "./post.js";
import { tagRoutes } from "./tag.js";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", postRoutes);
app.route("/", tagRoutes);

export default app;
