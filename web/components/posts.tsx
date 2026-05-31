import useQueryPosts from "@/src/hooks/use-query-posts";
import Post from "./post";

const Posts = () => {
    const { posts } = useQueryPosts();

        return (
            <>
            {posts.map(p => {
                <Post key={p.id} post={p}></Post>
            })}
            </>
        )
}

export default Posts;