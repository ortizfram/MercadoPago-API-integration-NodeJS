import React, { useState, useEffect } from "react";
import PostFeature from "../components/PostFeature";

const posts = [
  {
    id: 1,
    title: "Post 1",
    description: "This is the description for post 1.",
    imageSrc: "/post1.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    description: "This is the description for post 2.",
    imageSrc: "/post2.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    description: "This is the description for post 3.",
    imageSrc: "/post3.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center pt-[200px] mx-auto">
      {posts.map((post) => (
        <div className="m-4" key={post.id}>
          <PostFeature post={post} />
        </div>
      ))}
    </div>
  );
}
