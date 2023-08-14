import List from '@components/common/list'
import PostItem from '@components/post/post-item'

import { getPosts } from '@utils/posts'

export default async function Home() {
  const posts = await getPosts()
  return (
    <>
      <h3 className="text-3xl">최근 게시물</h3>
      <List className="my-3 flex flex-col gap-4">
        {posts.slice(0, 5).map(post => (
          <List.Item
            key={post.slug}
            className="border-1 rounded-lg border border-solid border-gray-100 p-4 shadow-md"
            linkTo={`posts/${post.slug}`}
            as={
              <PostItem
                title={post.fontMatter.title}
                date={post.fontMatter.date}
                description={post.fontMatter.description}
              />
            }
          />
        ))}
      </List>
    </>
  )
}
