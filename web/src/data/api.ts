import type { PostType } from "./types";

const dummyPosts = {
    "posts": [
        {
            id: "1",
            timestamp: "2026-05-24T12:00:00Z",
            title: "Something",
            content: "aaaaaaaaaaahhhhhhhhhhhhhhhhh text text text idk",
            tags: ["art"]
        },
    ]
}

export const fetchPosts = () : PostType[] => {
    return dummyPosts.posts;
}