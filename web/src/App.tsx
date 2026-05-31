import { useStore } from "@nanostores/react";
import "./index.css";
import Header from "@/components/header"
import { $router } from "@/lib/router";
import Post from "@/components/post";
import Posts from "@/components/posts";

function App() {
  const page = useStore($router);

  if (!page) {
    return (
      <div>whomp whomp</div>
    );
  }

  return <>
    <Header />
    <div>
      {page.route === "home" && <Posts />}
      {/* {page.route === "post" && <Post post={page.params.postId} />} */}
    </div>
  </>;
}

export default App;
