import { atom } from "nanostores";
import type { PostType } from "@/src/data/types";

export const $posts = atom<PostType[]>([]);

export const setPosts = (posts: PostType[]) => {
    $posts.set(posts);
}

export const addPost = (post: PostType) => {
    $posts.set([post, ...$posts.get()])
}

export const removePost = (id: string) => {
    $posts.set($posts.get().filter(p => p.id !== id))
}

export const updatePost = (id: string, title: string, content: string) => {
    $posts.set(
        $posts.get().map(p => {
            if (p.id === id) {
                return {...p, title: title, content: content}
            } 
            return p;
        }), 
    )
}
