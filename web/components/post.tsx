import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { $router } from "@/lib/router";
import type { PostType } from "@/src/data/types"
import { openPage } from "@nanostores/router";

type PostProps = {
    post: PostType;
}

const Post = (props: PostProps) => {
    const { post } = props;

    const navigateToPost = (e: React.MouseEvent) => {
        e.preventDefault();
        openPage($router, "post", {postId: post.id});
    }

    return <>
        <Card onClick={navigateToPost}>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{
                        new Date(post.timestamp).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                        })
                    }</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{post.content}</p>
            </CardContent>
        </Card>
    </>
}

export default Post;