import { PropsWithChildren } from "react";

export default function PostDetailLayout({ children }: PropsWithChildren) {
  return <div className="prose max-w-full">{children}</div>;
}
