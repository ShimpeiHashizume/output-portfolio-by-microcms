import { ConvertBodyProps } from "@/type/type";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import parse, { Element, Text } from "html-react-parser";

import Image from "next/image";
import React from "react";

const ConvertBody: React.FC<ConvertBodyProps> = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node instanceof Element) {
        const { name, attribs } = node;
        if (name === "img" && attribs) {
          const { src, alt, width, height } = attribs;
          return <Image src={src} alt={alt} width={Number(width)} height={Number(height)} />;
        }
        if (name === "code") {
          const textNode = node.children.find((child) => child instanceof Text) as Text | undefined;
          if (textNode) {
            const result = hljs.highlightAuto(textNode.data);
            const dom = parse(result.value);
            return <code className="hljs">{dom}</code>;
          }
        }
      }
      return node;
    },
  });
  return <>{contentReact}</>;
};

export default ConvertBody;
