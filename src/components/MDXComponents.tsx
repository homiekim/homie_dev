import { MDXComponents } from "mdx/types";
import CustomImage from "./CustomImage";
import { ReactElement } from "react";

const MDXComponents: MDXComponents = {
  pre: (v) => {
    const isBox = (v.children as ReactElement).props.children;
    return typeof isBox === "string" ? <div className='p-2 bg-slate-300 rounded'>{isBox}</div> : <pre {...v} />;
  },
  a: (v) => {
    return <a className="text-blue-400" target="_blank" {...v} />;
  },
  img: (v) => {
    return <CustomImage src={v.src!} alt={v.alt!} />;
  },
};

export default MDXComponents;
