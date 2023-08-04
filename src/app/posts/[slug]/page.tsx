import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

import MDXComponent from '@components/MDXComponents'

import { getPost } from '@utils/posts'

interface Props {
  params: { slug: string }
}

export default async function PostDetailPage({ params }: Props) {
  const post = await getPost(params.slug)
  const source = post?.mdData ?? ''
  return (
    <div>
      <MDXRemote
        source={source}
        components={MDXComponent}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: 'slack-dark',
                },
              ],
            ],
          },
        }}
      />
    </div>
  )
}
