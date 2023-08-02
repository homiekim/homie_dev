import { getPosts } from "@/utils/posts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <h3 className="text-3xl">Post List</h3>
      <ul className="flex flex-col gap-4 my-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`posts/${post.slug}`}>
            <li className="p-4 border border-solid border-1 border-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">
                title : {post.fontMatter.title}
              </h3>
              <span>description : {post.fontMatter.description}</span>
              <br />
              <span>date : {post.fontMatter.date}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
