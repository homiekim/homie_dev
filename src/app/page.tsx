import { getPosts } from '@utils/posts'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()
  return (
    <div>
      <h3 className="text-3xl">Post List</h3>
      <ul className="my-3 flex flex-col gap-4">
        {posts.map(post => (
          <Link key={post.slug} href={`posts/${post.slug}`}>
            <li className="border-1 rounded-lg border border-solid border-gray-100 p-4 shadow-md">
              <h3 className="text-xl font-bold">title : {post.fontMatter.title}</h3>
              <span>description : {post.fontMatter.description}</span>
              <br />
              <span>date : {post.fontMatter.date}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
