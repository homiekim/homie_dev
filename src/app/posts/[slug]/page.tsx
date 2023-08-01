import MDXComponents from "@/components/MDXComponents";
import { getPost } from "@/utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

interface Props {
  params: { slug: string };
}

export default async function PostDetailPage({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <div>
      <MDXRemote
        source={post!.mdData}
        components={MDXComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
