import { PropsWithChildren } from "react";

export default function PostDetailLayout({ children }: PropsWithChildren) {
  return <div className="markdown-body">{children}</div>;
}
