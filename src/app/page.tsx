import { getPosts } from "@/utils/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <h3 className="text-3xl">Post List</h3>
      <ul className="flex flex-col gap-4 my-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <h3 className="text-xl font-bold">
              title : {post.fontMatter.title}
            </h3>
            <span>description : {post.fontMatter.description}</span>
            <br />
            <span>date : {post.fontMatter.date.toString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
