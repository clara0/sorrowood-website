import { sql } from "drizzle-orm";
import { connection, db } from "./index.js";
import { posts, tags, postsToTags } from "./schema.js";
import { faker } from "@faker-js/faker";


async function seed() {
    console.log("Seeding the database...");

    console.log("Cleaning existing data...");
    // clean up existing data
    await db.delete(posts);
    await db.delete(tags);
    await db.delete(postsToTags);
    db.run(
        sql`DELETE FROM sqlite_sequence WHERE name IN ('posts', 'tags', 'postsToTags')`,
    );

    console.log("Inserting new seed data...");

    const sampleTags = [
        "art",
        "story",
        "programming"
    ];

    sampleTags.forEach(async t => {
        await db.insert(tags).values({
            tag: t
        });
    })

    for (let i = 0; i < 10; i++) {
        const post = await db
        .insert(posts).values({
            timestamp: faker.date.recent({days: 20}),
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
        }).returning().get();
        
        const randomTags = faker.helpers.arrayElements(sampleTags, { min: 1, max: 2 });

        randomTags.forEach(async t => {
            await db.insert(postsToTags).values({
                    postId: post.id,
                    tag: t
                });
        });
    }

    console.log("Seeding completed successfully.");
}

seed()
    .catch((e) => {
        console.error("Seeding failed:");
        console.error(e);
    })
    .finally(() => {
        connection.close();
    });