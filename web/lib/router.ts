import { BASE_URL } from "@/src/env";
import { createRouter } from "@nanostores/router";

export const $router = createRouter({
  home: `${BASE_URL}`, 
  post: `${BASE_URL}posts/:postId`, 
});