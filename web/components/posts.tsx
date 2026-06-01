import useQueryPosts from "@/src/hooks/use-query-posts";
import Post from "./post";

const Posts = () => {
    const { posts } = useQueryPosts();

    return (
        <div className="max-w-xl max-h-lg mx-auto">
        {posts.map(p => 
            <Post key={p.id} post={p}></Post>
        )}
        </div>
    );
}

export default Posts;