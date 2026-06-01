import { useStore } from "@nanostores/react";
import "./index.css";
import Header from "@/components/header"
import { $router } from "@/lib/router";
import Page from "@/components/page";

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
      {page.route === "home" && <Page />}
      {page.route === "post" && <Page postId={page.params.postId} />}
    </div>
  </>;
}

export default App;
