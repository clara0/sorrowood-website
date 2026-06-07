import useQueryPosts from "@/src/hooks/use-query-posts";
import Post from "./post";
import Posts from "./posts";

type PageProps = {
    postId?: string;
}

const Page = (props: PageProps) => {
    const { postId } = props;

    const { posts } = useQueryPosts();
    const displayPost = posts.find(p => p.id === postId);
    console.log(displayPost);

    if (postId && displayPost) {
        return <Post post={displayPost}></Post>
    }

    return <Posts />
}

export default Page;