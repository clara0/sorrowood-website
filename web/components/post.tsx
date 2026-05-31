import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { $router } from "@/lib/router";
import type { PostType } from "@/src/data/types"
import { openPage } from "@nanostores/router";

type PostProps = {
    post: PostType;
}

const Post = (props: PostProps) => {
    const { post } = props;
    const timestamp = new Date(post.timestamp);

    const navigateToPost = (e: React.MouseEvent) => {
        e.preventDefault();
        openPage($router, "")
    }

    return <>
        <Card onClick={navigateToPost}>
            <CardHeader>
                
            </CardHeader>
        </Card>
    </>
}

export default Post;