import { $posts, setPosts } from "@/lib/store";
import { useStore } from "@nanostores/react";
import { fetchPosts } from "../data/api";
import { useEffect } from "react";

const useQueryPosts = () => {
    const posts = useStore($posts);

    const loadPosts = () => {
        const posts = fetchPosts()
        setPosts(posts)
    }

    useEffect(() => {
        loadPosts()
    }, [posts]);

    return { posts, loadPosts }
}

export default useQueryPosts;
