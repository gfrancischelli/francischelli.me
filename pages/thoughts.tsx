import posts from "../content/posts";
import Posts from "../components/Posts";
import { PageComponent } from "../components/PageComponent.d";

const Thoughts: PageComponent = () => (
  <div>
    <Posts data={posts} />
  </div>
);

Thoughts.Heading = () => <>Here are some things I've been thinking about</>;

export default Thoughts;
