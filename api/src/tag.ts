import { Hono } from "hono";
import { db } from "./db/index.js";
import { postsToTags, tags } from "./db/schema.js";
import { and, eq } from "drizzle-orm";

export const tagRoutes = new Hono();

// Adding/removing tags? Shouldn't need patch?
tagRoutes.get("/tags", async (c) => {
    const allTags = await db.select().from(tags);
    return c.json(allTags);
});

tagRoutes.post("/tags", async (c) => {
    const { tag } = await c.req.json();
    const newTag = await db.insert(tags).values({ tag }).returning().get();
    return c.json(newTag);
})

// oops should I have given tags an id
tagRoutes.delete("/tags", async (c) => {
    const { tag } = await c.req.json();
    const deletedTag = await db.delete(tags).where(eq(tags.tag, tag)).returning().get();
    return c.json(deletedTag);
})

// Adding/removing tags to a post, also shouldn't need a patch?
tagRoutes.get("/posts/:postId/tags", async (c) => {
    const id = parseInt(c.req.param("postId"));
    const allTags = await db.select({
        tag: postsToTags.tag
    }).from(postsToTags).where(eq(postsToTags.postId, id));
    return c.json(allTags);
});

tagRoutes.post("/posts/:postId/tags", async (c) => {
    const id = parseInt(c.req.param("postId"));
    const { tag } = await c.req.json();
    const newTag = await db.insert(postsToTags).values({
        tag: tag,
        postId: id
    }).returning().get();
    return c.json(newTag);
});

tagRoutes.delete("/posts/:postId/tags", async (c) => {
    const id = parseInt(c.req.param("postId"));
    const { tag } = await c.req.json();
    const deletedTag = await db.delete(postsToTags).where(
        and(eq(postsToTags.postId, id), eq(postsToTags.tag, tag))
    ).returning().get();
    return c.json(deletedTag);
});
