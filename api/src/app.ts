import { Hono } from "hono";
import { postRoutes } from "./post.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", postRoutes)

export default app;
