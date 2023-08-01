import dayjs from "dayjs";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { cache } from "react";

interface FrontMatter {
  title: string;
  description: string;
  date: string;
}

export const getPosts = cache(async () => {
  const files = sync("./posts/*.md*");
  const posts = files.map((path) => {
    const file = fs.readFileSync(path, { encoding: "utf-8" });
    const { data, content } = matter(file);

    return {
      slug: path.split("/")[1].replace("md", "").slice(0, -1),
      fontMatter: {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
      } as FrontMatter,
      mdData: content,
    };
  });
  return posts;
});

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
