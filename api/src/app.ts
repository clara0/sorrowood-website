import { Hono } from "hono";
import { postRoutes } from "./post.js";
import { tagRoutes } from "./tag.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", postRoutes);
app.route("/", tagRoutes);

export default app;
