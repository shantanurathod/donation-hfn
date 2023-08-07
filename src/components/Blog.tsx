"use client";

import {MouseEventHandler} from 'react'
import Image from "next/image";
import Support from "./Support";
import MDParserBlog from "./MDParserBlog";

export default function Blog({
  data,
}: {
  data: {
    title: string;
    mainImage: string;
    description: string;
    tagline: string;
  }}
) {

  return (
    <>
      <div className="group lg:hover:before:block before:hidden before:absolute before:-inset-1 before:bg-gray-700 before:opacity-50 relative rounded-lg overflow-hidden hover:transition-all ease-in-out delay-1000 cursor-pointer">
        <h2 className="hidden hover:transition-all hover:delay-2000 text-center lg:group-hover:block text-white capitalize font-bold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {data["title"]}
        </h2>
        <Image
          className="object-contain"
          src={data["mainImage"]}
          alt="main-image"
          width={1600}
          height={600}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-gray-800 font-semibold text-3xl py-3">Story</h2>
        <h3 className="my-3 text-xl text-gray-900 font-bold">
          {data["tagline"]}
        </h3>
        <MDParserBlog description={data["description"]}/>
        <Support/>
      </div>
    </>
  );
}
