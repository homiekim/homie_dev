import { PropsWithChildren } from "react";

export default function PostDetailLayout({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-neutral max-w-full">{children}</div>
  );
}
