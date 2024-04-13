import BlogList from "./components/blog/BlogList.vue";
import WriteBlog from "./components/blog/WriteBlog.vue";
import singleBlog from "./components/blog/WatchBlog.vue";
import NotFound from "./components/partials/notFound.vue";

export default [
  {
    path: "/",
    component: BlogList,
  },
  {
    path: "/add",
    component: WriteBlog,
  },
  {
    path: "/add/:id",
    component: WriteBlog,
  },
  {
    path: "/blog/:id",
    component: WatchBlog,
  },
  {
    path: "*",
    component: NotFound,
  },
];