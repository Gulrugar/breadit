"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { FC } from "react";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  {
    ssr: false,
  }
);

interface EditorOutputProps {
  content: any;
}

const style = {
  paragraph: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  header: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1.25rem",
    },
    h4: {
      fontSize: "1.125rem",
    },
  },
};

function CustomImageRenderer({ data }: any) {
  const src = data.file.url;

  return (
    <div className="relative w-full min-h-[25rem]">
      <Image alt="image" className="object-contain" fill src={src} />
    </div>
  );
}

function CustomCodeRenderer({ data }: any) {
  return (
    <pre className="bg-gray-800 rounded-md p-4">
      <code className="text-gray-100 text-sm">{data.code}</code>
    </pre>
  );
}

function customListRenderer({ data }: any) {
  return (
    <>
      {data?.style === "unordered" ? (
        <ol className="list-disc ml-4">
          {data.items.map((item: any, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className="list-decimal ml-4">
          {data.items.map((item: any, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
  list: customListRenderer,
};

const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  return (
    <Output
      style={style}
      data={content}
      className="text-sm"
      renderers={renderers}
    />
  );
};

export default EditorOutput;
