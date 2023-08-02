import MDXComponents from "@/components/MDXComponents";
import { getPost } from "@/utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

interface Props {
  params: { slug: string };
}

export default async function PostDetailPage({ params }: Props) {
  const post = await getPost(params.slug);
  const source = post?.mdData ?? "";
  return (
    <div>
      <MDXRemote
        source={source}
        components={MDXComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "slack-dark",
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}
