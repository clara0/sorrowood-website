import { useStore } from "@nanostores/react";
import "./index.css";
import Header from "@/components/header"
import { $router } from "@/lib/router";
import Page from "@/components/page";
import About from "@/components/about";

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
      {page.route === "about" && <About />}
    </div>
  </>;
}

export default App;
