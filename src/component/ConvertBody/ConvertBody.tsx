import { ConvertBodyProps } from "@/type/type";
import parse, { Element } from "html-react-parser";
import Image from "next/image";
import React from "react";

const ConvertBody: React.FC<ConvertBodyProps> = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      const { name, attribs } = node as Element;
      if (name === "img" && attribs) {
        const { src, alt, width, height } = attribs;
        return <Image src={src} alt={alt} width={Number(width)} height={Number(height)} />;
      }
    },
  });
  return <>{contentReact}</>;
};

export default ConvertBody;
