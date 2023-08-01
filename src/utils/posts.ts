import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

export const getPosts = async () => {
  const files = sync("./posts/*.md*");
  const posts = files.map((path) => {
    const file = fs.readFileSync(path, { encoding: "utf-8" });
    const { data, content } = matter(file);

    return {
      slug: path.split("/")[1].replace("md", "").slice(0, -1),
      fontMatter: data,
      mdData: content,
    };
  });
  return posts
};
