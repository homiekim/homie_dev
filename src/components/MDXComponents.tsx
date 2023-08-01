import { MDXComponents } from "mdx/types";
import NextImage from "next/image";

const MDXComponents: MDXComponents = {
  // @ts-expect-error types
  Image: NextImage,
};

export default MDXComponents;
